



function replaceContent() {
    // Находим контейнер с блоками
    var content = document.getElementById("test-container");

    // Очищаем контейнер
    content.innerHTML = '';

    // Получаем данные о пользователе
    let tg = window.Telegram.WebApp
    
    var tg_username = tg.initDataUnsafe.user.username

    // Создаем HTML-код для формы
    var formHTML = `
        <div class="back-btn"><img src="static/images/back-icon.png" alt="изображение" class="back-icon"><a href="http://127.0.0.1:5000/new-bank-account" class="back-btn">Назад</a></div>
        <div class="new-account-container">
            <form action="/submit" method="POST" class="form-style">
                <input type="text" id="name" name="name" class="input-style" placeholder="${tg_username}">
                <input type="text" id="desc" name="desc" class="input-style" placeholder="Описание">
                <input type="text" name="balance" class="input-style" placeholder="Баланс ₽">
                <button type="submit" class="form-btn">Создать</button>
            </form>
        </div>
    `;

    // Вставляем форму в контейнер
    content.innerHTML = formHTML;
}