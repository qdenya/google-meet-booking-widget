# Google Meet Booking Widget

Виджет для бронирования встреч Google Meet на React + TypeScript с Redux Toolkit и RTK Query.

## 🚀 Возможности

- ✅ Кастомный календарь для выбора даты
- ✅ Список доступных слотов времени справа
- ✅ Информация о специалисте слева (фото, имя, описание)
- ✅ Форма бронирования с валидацией
- ✅ Интеграция с Google Meet API
- ✅ Redux Toolkit + RTK Query
- ✅ TypeScript типизация
- ✅ CSS Modules
- ✅ Адаптивный дизайн
- ✅ Два режима: встроенный и модальное окно
- ✅ Легкая интеграция

## 📦 Установка

### Через CDN (Рекомендуется для быстрого старта)

**Встроенный режим** - виджет встраивается в элемент на странице:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-booking-widget.css">
</head>
<body>
  <div id="booking-widget"></div>
  
  <script src="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-widget.umd.js"></script>
  <script>
    GoogleMeetBooking.init('booking-widget', {
      apiUrl: 'https://your-api.com',
      apiToken: 'your_token',
      specialist: {
        name: 'Иван Петров',
        description: 'Эксперт по веб-разработке'
      }
    });
  </script>
</body>
</html>
\`\`\`

**Модальный режим** - виджет открывается в модальном окне по клику:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-booking-widget.css">
</head>
<body>
  <button id="open-booking">Записаться на встречу</button>
  
  <script src="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-widget.umd.js"></script>
  <script>
    // Инициализируем модальный виджет
    const openBookingModal = GoogleMeetBooking.initModal({
      apiUrl: 'https://your-api.com',
      apiToken: 'your_token',
      specialist: {
        name: 'Иван Петров',
        description: 'Эксперт по веб-разработке'
      }
    });
    
    // Привязываем к кнопке
    document.getElementById('open-booking').addEventListener('click', openBookingModal);
  </script>
</body>
</html>
\`\`\`

### Через npm

\`\`\`bash
npm install @your-username/google-meet-booking-widget
\`\`\`

\`\`\`typescript
import { initBookingWidget } from '@your-username/google-meet-booking-widget';
import '@your-username/google-meet-booking-widget/dist/style.css';

initBookingWidget('booking-widget', {
  apiUrl: 'https://your-api.com',
  apiToken: 'your_token'
- [example-cdn.html](example-cdn.html) - встроенный режим
- [example-modal-cdn.html](example-modal-cdn.html) - модальное окно
- [MODAL-USAGE.md](MODAL-USAGE.md) - подробная документация по модальному режиму
- [DEPLOY.md](DEPLOY.md) - инструкция по деплою
\`\`\`

## ⚙️ Конфигурация

\`\`\`typescript
interface WidgetConfig {
  apiUrl: string;              // URL вашего API
  apiToken: string;            // API токен клиента
  specialist?: {               // Информация о специалисте
    name: string;
    description?: string;
    email?: string;
    photo?: string;
  };
  theme?: {                    // Кастомная тема
    primaryColor?: string;
    secondaryColor?: string;
  };
}
\`\`\`

## 🛠 Разработка

\`\`\`bash
npm install
npm run dev     # http://localhost:5173
npm run build   # Сборка в dist/
\`\`\`

## 📖 Примеры

См. [example-cdn.html](example-cdn.html) и [DEPLOY.md](DEPLOY.md)

## 📝 Лицензия

MIT
