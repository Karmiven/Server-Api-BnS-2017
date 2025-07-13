document.addEventListener('DOMContentLoaded', () => {
           // Инициализация toast
           const successToast = new bootstrap.Toast(document.getElementById('successToast'));
           const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
           
           // Функция для обновления данных на странице
           const updatePageData = (html) => {
             const parser = new DOMParser();
             const newDoc = parser.parseFromString(html, 'text/html');
             
             document.getElementById('statusSection').innerHTML = 
               newDoc.getElementById('statusSection').innerHTML;
             
             document.getElementById('userDetailsSection').innerHTML = 
               newDoc.getElementById('userDetailsSection').innerHTML;
             
             document.getElementById('subscriptionsSection').innerHTML = 
               newDoc.getElementById('subscriptionsSection').innerHTML;
           };
           
           // Функции для показа toast
           const showSuccessToast = (message) => {
             document.getElementById('successToastMessage').textContent = message;
             successToast.show();
           };
           
           const showErrorToast = (message) => {
             document.getElementById('errorToastMessage').textContent = message;
             errorToast.show();
           };
           
           // Обработчик отправки формы
           document.getElementById('vipForm')?.addEventListener('submit', async (e) => {
             e.preventDefault();
             
             const form = e.target;
             const formData = new FormData(form);
             const submitBtn = form.querySelector('button[type="submit"]');
             const originalBtnText = submitBtn.innerHTML;
             
             // Показать состояние загрузки
             submitBtn.disabled = true;
             submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
             
             try {
               const response = await fetch('/admin/add-vip', {
                 method: 'POST',
                 body: new URLSearchParams(formData),
                 headers: {
                   'Content-Type': 'application/x-www-form-urlencoded',
                 },
               });
               
               const data = await response.json();
               
               if (data.success) {
                 showSuccessToast(data.message || 'Operation completed successfully');
                 
                 // Запрашиваем обновленные данные с сервера
                 const pageResponse = await fetch(window.location.href);
                 const pageHtml = await pageResponse.text();
                 updatePageData(pageHtml);
                 
                 form.reset();
               } else {
                 showErrorToast(data.message || 'Operation failed');
               }
             } catch (error) {
               showErrorToast('Server error occurred');
               console.error('Error:', error);
             } finally {
               submitBtn.disabled = false;
               submitBtn.innerHTML = originalBtnText;
             }
           });
         });