# Использование модального окна

## Описание

Модальный режим позволяет открывать виджет бронирования в всплывающем окне поверх вашей страницы. Это удобно, когда вы хотите, чтобы пользователь мог открыть календарь по клику на кнопку, а не показывать его сразу.

## Подключение

### 1. Подключите файлы виджета

```html
<!-- Стили виджета -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-booking-widget.css">

<!-- JavaScript виджета -->
<script src="https://cdn.jsdelivr.net/gh/qdenya/google-meet-booking-widget@v1.0.2/dist/google-meet-widget.umd.js"></script>
```

### 2. Создайте кнопку для открытия

```html
<button id="open-booking">Записаться на встречу</button>
```

### 3. Инициализируйте модальный виджет

```html
<script>
  // Инициализируем модальный виджет и получаем функцию для открытия
  const openBookingModal = GoogleMeetBooking.initModal({
    apiUrl: 'https://your-api-domain.com',
    apiToken: 'gma_your_api_token_here',
    specialist: {
      name: 'Иван Петров',
      description: 'Эксперт по веб-разработке',
      email: 'ivan@example.com'
    },
    theme: {
      primaryColor: '#667eea',
      secondaryColor: '#764ba2'
    }
  });

  // Привязываем открытие модалки к кнопке
  document.getElementById('open-booking').addEventListener('click', function() {
    openBookingModal();
  });
</script>
```

## Полный пример

См. файл `example-modal-cdn.html` в корне проекта.

## API

### `GoogleMeetBooking.initModal(config)`

Инициализирует виджет в модальном режиме.

**Параметры:**
- `config` - объект конфигурации виджета (см. ниже)

**Возвращает:**
- `Function` - функция для открытия модального окна

**Пример:**
```javascript
const openModal = GoogleMeetBooking.initModal({
  apiUrl: 'https://api.example.com',
  apiToken: 'your_token',
  specialist: {
    name: 'Специалист',
    description: 'Описание',
    email: 'email@example.com'
  }
});

// Открыть модалку
openModal();
```

## Конфигурация

Объект `config` принимает следующие параметры:

```typescript
interface WidgetConfig {
  // Обязательные параметры
  apiUrl: string;      // URL вашего backend API
  apiToken: string;    // API токен клиента
  
  // Опциональные параметры
  specialist?: {
    name: string;
    description?: string;
    email?: string;
    photo?: string;
  };
  
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  
  labels?: {
    timeSlot?: string;
    confirmation?: string;
    videoCall?: string;
  };
}
```

## Управление модальным окном

### Открытие

```javascript
openBookingModal(); // Вызов возвращенной функции
```

### Закрытие

Модальное окно закрывается:
- При клике вне области виджета
- При нажатии клавиши `Escape`
- После успешного бронирования
- Программно через возвращенную функцию

## Стилизация

Модальное окно имеет темный полупрозрачный фон и центрирование по экрану. Виджет внутри модалки использует те же стили, что и встроенный режим.

Вы можете переопределить стили модалки через CSS:

```css
/* Фон модалки */
.modal-overlay {
  background: rgba(0, 0, 0, 0.5) !important;
}

/* Контейнер виджета в модалке */
.modal-content {
  max-width: 1200px !important;
  border-radius: 12px !important;
}
```

## Разница между режимами

### Встроенный режим (`init`)
- Виджет встраивается в указанный элемент на странице
- Всегда видим
- Подходит для выделенных страниц бронирования

```javascript
GoogleMeetBooking.init('booking-widget', config);
```

### Модальный режим (`initModal`)
- Виджет открывается поверх страницы
- Открывается по требованию
- Подходит для кнопок "Записаться" на любых страницах

```javascript
const openModal = GoogleMeetBooking.initModal(config);
```

## Примеры использования

### Простая кнопка

```html
<button onclick="openBookingModal()">Записаться</button>
```

### Несколько кнопок

```html
<button class="booking-btn">Записаться на консультацию</button>
<button class="booking-btn">Записаться на встречу</button>

<script>
  const openModal = GoogleMeetBooking.initModal(config);
  
  document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener('click', openModal);
  });
</script>
```

### Программное открытие

```javascript
// Открыть модалку через 3 секунды после загрузки
setTimeout(() => {
  openBookingModal();
}, 3000);

// Открыть при скролле вниз
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    openBookingModal();
  }
});
```

## Адаптивность

Модальное окно полностью адаптивно:
- **Desktop**: виджет по центру экрана
- **Tablet**: виджет занимает 90% ширины
- **Mobile**: виджет на весь экран

## Производительность

Модальное окно создается один раз при инициализации и переиспользуется при каждом открытии. Это обеспечивает быструю работу и экономит ресурсы.

## Поддержка браузеров

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
