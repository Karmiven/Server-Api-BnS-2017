document.querySelectorAll('.donateButton').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Чтобы избежать перезагрузки страницы

        const username = localStorage.getItem('username'); // Получаем имя пользователя из localStorage

        if (!username) {
            alert('You are not logged in! Please log in.');
            return;
        }

        const donateButton = event.target;
        const quantity = parseInt(donateButton.getAttribute('data-amount'), 10) || 0; // Получаем количество (quantity)
        const bonusAmount = parseInt(donateButton.getAttribute('data-bonus'), 10) || 0; // Получаем бонус (bonusAmount)
        const productName = donateButton.getAttribute('data-name'); // Имя товара
        const price = parseFloat(donateButton.getAttribute('data-price')) || 0; // Цена товара
		const productId = parseInt(donateButton.getAttribute('data-id'), 10) || 0; // Получаем productId

        // Вычисляем итоговую сумму
        const totalAmount = quantity + bonusAmount;

        // Логируем данные для проверки
        console.log('Quantity:', quantity);
        console.log('Bonus Amount:', bonusAmount);
        console.log('Total Amount:', totalAmount);
        console.log('Username:', username);
        console.log('Product Name:', productName);

        // Данные, которые мы будем отправлять на сервер
        const data = {
            username: username,
            amount: totalAmount, // Передаем итоговую сумму
            productName: productName,
			price: price,
			productId: productId
        };

        // Отправка POST-запроса на сервер
        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                alert('Donation sent successfully!');
            } else {
                alert('Error: ' + result.message);
            }
        })
        .catch(error => {
            console.error('Error sending donation:', error);
            alert('There was an error sending the donation.');
        });
    });
});