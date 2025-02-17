//./routes/donateRoutes.js
import express from 'express';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import axios from 'axios';
import sql from 'mssql';
import multer from 'multer';  // Импортируем multer
import { fileURLToPath } from 'url';
import { isAdmin } from '../middleware/adminMiddleware.js';
import { configPlatformAcctDb, configVirtualCurrencyDb, WH_config, configDonationsDb } from '../config/dbConfig.js';


const router = express.Router();




// Получаем путь к текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'donations');  // Директория для хранения изображений

// Создание папки для изображений, если она не существует
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Настройка multer для хранения файлов в нужной папке
const upload = multer({
  dest: imagesDir,
  limits: { fileSize: 5 * 1024 * 1024 }, // Ограничение размера файла - 5MB
});

// Маршрут для отображения страницы добавления товара
router.get('/admin/donate', isAdmin, async (req, res) => {
  try {
    const pool = await sql.connect(configDonationsDb);
    const result = await pool.request().query('SELECT * FROM dbo.Products');
    res.render('adminDonate', { products: result.recordset, pathname: req.originalUrl });
    await pool.close();
  } catch (err) {
    console.error('Error while receiving goods:', err);
    res.status(500).send('Error while receiving goods.');
  }
});


// Маршрут для обработки добавления товара
router.post('/admin/donate/add', isAdmin, upload.single('image'), async (req, res) => {
  const { name, price, bonus, sale, quantity } = req.body;
  const image = req.file ? `/images/donations/${req.file.filename}` : null;

  try {
    const pool = await sql.connect(configDonationsDb);
    await pool.request()
      .input('Name', sql.NVarChar, name)
      .input('Price', sql.Decimal(18, 2), price)
      .input('Image', sql.NVarChar, image)
      .input('Bonus', sql.Int, bonus)
      .input('Sale', sql.Bit, sale === 'true')
      .input('Quantity', sql.Int, quantity)
      .input('BonusAmount', sql.Int, bonus ? parseInt(bonus, 10) : 0)
      .query(`
        INSERT INTO dbo.Products (Name, Price, Image, Bonus, Sale, Quantity, BonusAmount, AddedAt)
        VALUES (@Name, @Price, @Image, @Bonus, @Sale, @Quantity, @BonusAmount, GETDATE())
      `);

    await pool.close();
    console.log(chalk.green(`Added product:`) + chalk.hex('#FFA500')(name) + 
    chalk.green(`, price:`) + chalk.hex('#FFA500')(price));
    res.redirect('/admin/donate');
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).send('Error adding product.');
  }
});


// Маршрут для обработки удаления товара
router.post('/admin/donate/delete/:id', isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await sql.connect(configDonationsDb);
    const result = await pool.request()
      .input('Id', sql.Int, id)
      .query('DELETE FROM dbo.Products WHERE Id = @Id');

    await pool.close();

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send('Product not found');
    }

    console.log(chalk.red(`Product with ID:`) + chalk.hex('#FFA500')(id) + chalk.red(` has been deleted`));
    res.redirect('/admin/donate');
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).send('Error adding product.');
  }
});


// Маршрут для отображения формы редактирования товара
router.get('/admin/donate/edit/:id', isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await sql.connect(configDonationsDb);
    const result = await pool.request()
      .input('Id', sql.Int, id)
      .query('SELECT * FROM dbo.Products WHERE Id = @Id');

    await pool.close();

    if (result.recordset.length === 0) {
      return res.status(404).send('Product not found');
    }

    res.render('editProduct', { product: result.recordset[0], pathname: req.originalUrl });
  } catch (err) {
    console.error('Error loading product for editing:', err);
    res.status(500).send('Error loading product.');
  }
});


// Маршрут для обработки обновления товара
router.post('/admin/donate/update/:id', isAdmin, upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { name, price, bonus, sale, quantity } = req.body;
  const image = req.file ? `/images/donations/${req.file.filename}` : null;

  try {
    const pool = await sql.connect(configDonationsDb);
    await pool.request()
      .input('Id', sql.Int, id)
      .input('Name', sql.NVarChar, name)
      .input('Price', sql.Decimal(18, 2), price)
      .input('Bonus', sql.Int, bonus)
      .input('Sale', sql.Bit, sale === 'true')
      .input('Quantity', sql.Int, quantity)
      .input('Image', sql.NVarChar, image)
      .query(`
        UPDATE dbo.Products
        SET Name = @Name, Price = @Price, Bonus = @Bonus, Sale = @Sale,
            Quantity = @Quantity, Image = ISNULL(@Image, Image)
        WHERE Id = @Id
      `);

    await pool.close();
    console.log(`Товар с ID ${id} был обновлён`);
    res.redirect('/admin/donate');
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).send('Error updating product.');
  }
});


// Промежуточная проверка для запрета доступа к /donate без параметра userName
// Промежуточная проверка для запрета доступа к /donate без параметра userName
router.get('/donate', async (req, res, next) => { // Добавляем async здесь
    if (!req.query.userName) {
        // Если параметр userName отсутствует, рендерим 404 страницу
        return res.status(404).render('404', { message: 'The userName parameter is not specified.' });
    }
    
    try {
        // Чтение данных о продуктах из базы данных
        const pool = await sql.connect(configDonationsDb);
        const result = await pool.request().query('SELECT * FROM dbo.Products');
        await pool.close();

        // Рендеринг страницы доната
        res.render('donateShop', { UserName: req.query.userName, products: result.recordset, pathname: req.originalUrl });
    } catch (err) {
        console.error('Error while receiving goods:', err);
        res.status(500).send('Error while receiving goods.');
    }
});


// Функция для получения UserId по Username из базы данных PlatformAcctDb
async function getUserIdByUsername(username) {
    let pool;
    try {
        pool = await sql.connect(configPlatformAcctDb);
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .query('SELECT UserId FROM Users WHERE UserName = @username');

        return result.recordset[0] ? result.recordset[0].UserId : null; // Возвращаем UserId или null, если не найдено
    } catch (err) {
        console.error('Error connecting to PlatformAcctDb database:', err);
        throw err;
    } finally {
        if (pool) {
            await pool.close();
        }
    }
}

// Функция для извлечения строки между двумя маркерами
function cut_str(startTag, endTag, inputString) {
    const startIndex = inputString.indexOf(startTag);
    if (startIndex === -1) return ''; // Если стартовый тег не найден

    const endIndex = inputString.indexOf(endTag, startIndex + startTag.length);
    if (endIndex === -1) return ''; // Если конечный тег не найден

    return inputString.substring(startIndex + startTag.length, endIndex);
}


// Функция для добавления записи о донате в таблицу userDonationsDB
async function addDonationRecord(username, userId, amount, productName, quantity, productId, price, bonus) {
    let pool;
    try {
        pool = await sql.connect(configDonationsDb);
        await pool.request()
            .input('Username', sql.NVarChar, username)
            .input('UserId', sql.UniqueIdentifier, userId)
            .input('Amount', sql.Int, amount)
            .input('ProductName', sql.NVarChar, productName)
            .input('Quantity', sql.Int, quantity)
            .input('ProductId', sql.BigInt, productId)
            .input('Price', sql.Decimal(18, 2), price)
            .input('Bonus', sql.NVarChar, bonus)
            .input('Date', sql.DateTime2, new Date()) // Дата пожертвования — текущее время
            .query(`
                INSERT INTO DonationsDb.dbo.userDonationsDB (username, userId, amount, productName, quantity, productId, price, bonus, date)
                VALUES (@Username, @UserId, @Amount, @ProductName, @Quantity, @ProductId, @Price, @Bonus, @Date)
            `);
            console.log(chalk.green('Donation successfully recorded for:') + '' + chalk.hex('#FFA500')(username) + 
                chalk.green(' for the amount:') + '' + chalk.hex('#FFA500')(price) + 
                chalk.green(', purchased item:') + '' + chalk.hex('#FFA500')(productName) + 
                chalk.green(', Product ID:') + '' + chalk.hex('#FFA500')(productId));
    } catch (err) {
        console.error('Error adding record to userDonationsDB table:', err);
    } finally {
        if (pool) {
            await pool.close();
        }
    }
}

router.post('/donate', async (req, res) => {
    const { username, amount, productName, price, productId } = req.body;

    // Проверка входных данных
    if (!username || !amount || isNaN(amount) || amount <= 0 || !price || isNaN(price) || !productId) {
    return res.status(400).send({
        status: 'error',
        message: 'Invalid input data. Price or Product ID is missing or incorrect.'
    });
}

    let poolPlatform, poolVirtualCurrency;
    let userId = '';
    let totalBalance = 0;
    let totalAmount = 0;

    try {
        // 1. Получаем UserId по Username
        userId = await getUserIdByUsername(username);
        if (!userId) {
            return res.status(404).send({
                status: 'error',
                message: 'User not found in PlatformAcctDb.'
            });
        }

        // Подключаемся к базе данных VirtualCurrencyDb для получения данных о депозитах
        poolVirtualCurrency = await sql.connect(configVirtualCurrencyDb);

        // Получение общего баланса
        const balanceResult = await poolVirtualCurrency.request()
            .input('UserId', sql.UniqueIdentifier, userId)
            .query('SELECT SUM(Balance) AS totalBalance FROM [dbo].[Deposits] WHERE UserId = @UserId');

        totalBalance = balanceResult.recordset[0].totalBalance || 0;

        // Получение всех депозитов для подсчета общей суммы
        const depositsResult = await poolVirtualCurrency.request()
            .input('UserId', sql.UniqueIdentifier, userId)
            .query('SELECT DepositId, Amount FROM Deposits WHERE UserId = @UserId');

        const deposits = depositsResult.recordset || [];

        // Вычисление общей суммы Amount
        totalAmount = deposits.reduce((acc, deposit) => acc + Number(deposit.Amount), 0);

        // Примерный алгоритм для получения данных из внешнего сервиса
        const response = await axios.get('http://127.0.0.1:6605/apps-state');
        const appResult = response.data;

        let resultapp = cut_str('<AppName>VirtualCurrencySrv</AppName>', '</App>', appResult);
        resultapp = cut_str('<Epoch>', '</Epoch>', resultapp);

        const request_code = Math.floor(Math.random() * 10000) + 1;

        // Вместо username, используем userId для поля "to"
        const postRequest = {
            protocol: 'VirtualCurrency',
            command: 'Deposit',
            from: '',
            to: userId,
            message: `<Request>
                <CurrencyId>51</CurrencyId>
                <Amount>${amount}</Amount>
                <EffectiveTo>2099-05-05T03:30:30+09:00</EffectiveTo>
                <IsRefundable>0</IsRefundable>
                <DepositReasonCode>1</DepositReasonCode>
                <DepositReason>Donation for ${productName}</DepositReason>
                <RequestCode>${request_code}</RequestCode>
                <RequestId>G</RequestId>
            </Request>`
        };

        // Отправка POST-запроса на внешний сервис
        const postResponse = await axios.post(
            `http://127.0.0.1:6605/spawned/VirtualCurrencySrv.1.${resultapp}/test/command_console`,
            null,
            {
                params: {
                    protocol: postRequest.protocol,
                    command: postRequest.command,
                    from: postRequest.from,
                    to: postRequest.to,
                    message: postRequest.message,
                },
                headers: {
                    Accept: '*/*',
                    Connection: 'keep-alive',
                    Host: '127.0.0.1:6605',
                    Origin: 'http://127.0.0.1:6605',
                    Referer: 'http://127.0.0.1:6605/spawned/VirtualCurrencySrv.1',
                    'User-Agent': 'Mozilla/5.0',
                },
            }
        );

        console.log('Post request successful:', postResponse.data);

        // Запись в таблицу userDonationsDB
      await addDonationRecord(username, userId, amount, productName, 1, productId, price, null);

        res.status(200).send({
            status: 'success',
            message: 'Donation successfully processed',
        });
    } catch (error) {
        console.error('Error during donation process:', error);
        res.status(500).send({
            status: 'error',
            message: 'An error occurred during the donation process.'
        });
    } finally {
        if (poolPlatform) {
            await poolPlatform.close();
        }
        if (poolVirtualCurrency) {
            await poolVirtualCurrency.close();
        }
    }
});

export default router;

