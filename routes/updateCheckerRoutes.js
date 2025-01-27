import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { isAdmin } from '../middleware/adminMiddleware.js';

dotenv.config();

const router = express.Router();
const ENABLE_LOGGING = process.env.ENABLE_LOGGING === 'true';

// Настройки репозитория
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_OWNER = 'war100ck';
const REPO_NAME = 'Server-Api-BnS-2017';
const BRANCH = 'main';
const MANIFEST_FILE = 'manifest.json';
const UPDATE_FILE = 'update.md';
const LOCAL_MANIFEST_PATH = path.resolve(__dirname, '../manifest.json');
const LOCAL_FILES_PATH = path.resolve(__dirname, '../');

// Функция для загрузки и парсинга update.md с GitHub
async function fetchUpdateLog() {
    const url = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${UPDATE_FILE}`;
    try {
        if (ENABLE_LOGGING) console.log('[INFO] Fetching update log from GitHub...');
        const { data } = await axios.get(url); // Загружаем содержимое файла
        return marked(data); // Конвертируем Markdown в HTML
    } catch (err) {
        if (ENABLE_LOGGING) console.error('[ERROR] Could not fetch update log:', err.message);
        return '<p>Failed to load update news.</p>'; // Сообщение об ошибке
    }
}

// Загрузка локального манифеста
function loadLocalManifest() {
    try {
        if (ENABLE_LOGGING) console.log('[INFO] Loading local manifest...');
        const localManifest = fs.readFileSync(LOCAL_MANIFEST_PATH, 'utf8');
        return JSON.parse(localManifest);
    } catch (err) {
        if (ENABLE_LOGGING) console.error('[WARNING] Local manifest not found or invalid:', err.message);
        return null;
    }
}

// Получение списка файлов для обновления
async function getFilesToUpdate() {
    try {
        if (ENABLE_LOGGING) console.log('[INFO] Fetching remote manifest...');
        const url = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${MANIFEST_FILE}`;
        const { data: remoteManifest } = await axios.get(url);

        const localManifest = loadLocalManifest();
        const filesToUpdate = [];

        if (ENABLE_LOGGING) console.log('[INFO] Comparing remote and local manifests...');
        if (remoteManifest) {
            for (const file in remoteManifest) {
                if (file.startsWith('.git/')) continue;

                const remoteHash = remoteManifest[file];
                const localHash = localManifest ? localManifest[file] : null;

                if (!localHash || remoteHash !== localHash) {
                    if (ENABLE_LOGGING) console.log(`[INFO] File needs update: ${file}`);
                    filesToUpdate.push(file);
                }
            }
        }

        if (ENABLE_LOGGING) console.log(`[INFO] Files to update: ${filesToUpdate.length > 0 ? filesToUpdate.join(', ') : 'None'}`);
        return filesToUpdate;
    } catch (err) {
        if (ENABLE_LOGGING) console.error('[ERROR] Failed to fetch or compare manifests:', err.message);
        throw err;
    }
}

// Маршрут для проверки обновлений
router.get('/admin/update/check', isAdmin, async (req, res) => {
    if (ENABLE_LOGGING) console.log('[INFO] Received request to check updates.');
    try {
        const filesToUpdate = await getFilesToUpdate();
        const updateLog = await fetchUpdateLog(); // Загружаем update.md с GitHub
        res.render('updateChecker', { pathname: req.path, filesToUpdate, checked: true, updateLog });
    } catch (err) {
        if (ENABLE_LOGGING) console.error('[ERROR] Error during update check:', err.message);
        res.status(500).send('Error checking for updates.');
    }
});

// Маршрут для обновления файлов
router.post('/admin/update', isAdmin, async (req, res) => {
    if (ENABLE_LOGGING) console.log('[INFO] Received request to update files.');
    try {
        const filesToUpdate = await getFilesToUpdate();

        for (const file of filesToUpdate) {
            const fileUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${file}`;
            const localFilePath = path.resolve(LOCAL_FILES_PATH, file);

            if (ENABLE_LOGGING) console.log(`[INFO] Downloading file: ${file}`);
            const response = await axios.get(fileUrl, { responseType: 'stream' });

            const dir = path.dirname(localFilePath);
            if (!fs.existsSync(dir)) {
                if (ENABLE_LOGGING) console.log(`[INFO] Creating directory: ${dir}`);
                fs.mkdirSync(dir, { recursive: true });
            }

            const writer = fs.createWriteStream(localFilePath);
            response.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });

            if (ENABLE_LOGGING) console.log(`[INFO] File updated successfully: ${file}`);
        }

        if (ENABLE_LOGGING) console.log('[INFO] All files updated successfully.');

        // Передаем successMessage после обновления
        res.render('updateChecker', { 
            pathname: req.path, 
            filesToUpdate: [], 
            checked: true, 
            updateLog: await fetchUpdateLog(),
            successMessage: "The update was successful. Please restart the API server to apply the changes" 
        });

    } catch (err) {
        if (ENABLE_LOGGING) console.error('[ERROR] Error during file update:', err.message);
        res.status(500).send('Error updating files.');
    }
});

// Маршрут для отображения страницы по умолчанию
router.get('/admin/update', isAdmin, async (req, res) => {
    if (ENABLE_LOGGING) console.log('[INFO] Rendering updateChecker page...');
    const updateLog = await fetchUpdateLog(); // Загружаем update.md с GitHub
    res.render('updateChecker', { pathname: req.path, filesToUpdate: [], checked: false, updateLog });
});

// Получение PID и перезагрузка сервера
router.get('/admin/restart', isAdmin, (req, res) => {
    const pid = process.pid;  // Получаем PID процесса
    if (ENABLE_LOGGING) console.log('[INFO] Server PID:', pid);

    // Отправляем информацию о PID на страницу
    res.render('updateChecker', { pathname: req.path, pid, restartMessage: 'Server is restarting...' });

    // Перезагружаем сервер
    exec('pm2 restart <your-process-name>', (err, stdout, stderr) => {
        if (err) {
            if (ENABLE_LOGGING) console.error('[ERROR] Failed to restart server:', err);
            return;
        }
        if (ENABLE_LOGGING) console.log('[INFO] Server restarted successfully:', stdout);
    });
});


export { router };
