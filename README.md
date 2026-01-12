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
- ✅ Легкая интеграция

## 📦 Установка

### Через CDN (Рекомендуется для быстрого старта)

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget/dist/style.css">
</head>
<body>
  <div id="booking-widget"></div>
  
  <script src="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget"></script>
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
});
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
