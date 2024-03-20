// Проверка поддержки сервисных работников
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован:', registration);
            })
            .catch(error => {
                console.log('Ошибка при регистрации Service Worker:', error);
            });
    });
}

// Пример работы события клика
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Нажми меня!';
    button.addEventListener('click', () => {
        alert('Вы нажали на кнопку!');
    });
    document.body.appendChild(button);
});
