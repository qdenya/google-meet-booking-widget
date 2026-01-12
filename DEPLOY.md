# Деплой виджета бронирования

## 📦 Способ 1: Публикация в npm (Рекомендуется)

### Подготовка

1. Зарегистрируйтесь на [npmjs.com](https://www.npmjs.com/)

2. Войдите в npm через терминал:
```bash
npm login
```

3. Измените название пакета в `package.json` (если нужно):
```json
{
  "name": "@your-username/google-meet-booking-widget"
}
```

### Публикация

```bash
# Сборка проекта
npm run build

# Публикация в npm
npm publish --access public
```

### Использование после публикации

```html
<!-- Из CDN jsDelivr (автоматически) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget/dist/style.css">
<script src="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget"></script>

<div id="booking-widget"></div>

<script>
  GoogleMeetBooking.init('booking-widget', {
    apiUrl: 'https://your-api.com',
    apiToken: 'your_token',
    specialist: { name: 'Иван Петров' }
  });
</script>
```

```html
<!-- Из CDN unpkg (автоматически) -->
<link rel="stylesheet" href="https://unpkg.com/@your-username/google-meet-booking-widget/dist/style.css">
<script src="https://unpkg.com/@your-username/google-meet-booking-widget"></script>
```

## 🌐 Способ 2: GitHub Pages (Быстрый способ)

### Настройка

1. Создайте GitHub репозиторий

2. Добавьте в `package.json`:
```json
{
  "homepage": "https://your-username.github.io/google-meet-booking-widget"
}
```

3. Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Push в GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/google-meet-booking-widget.git
git push -u origin main
```

5. В настройках репозитория: Settings → Pages → Source → gh-pages

### Использование

```html
<link rel="stylesheet" href="https://your-username.github.io/google-meet-booking-widget/style.css">
<script src="https://your-username.github.io/google-meet-booking-widget/google-meet-widget.umd.js"></script>

<div id="booking-widget"></div>

<script>
  GoogleMeetBooking.init('booking-widget', {
    apiUrl: 'https://your-api.com',
    apiToken: 'your_token'
  });
</script>
```

## 🚀 Способ 3: Собственный CDN/Сервер

### Подготовка файлов

```bash
npm run build
```

Файлы в `dist/`:
- `google-meet-widget.umd.js` - основной файл
- `google-meet-widget.es.js` - ES модуль
- `style.css` - стили
- `index.d.ts` - TypeScript типы

### Загрузка на сервер

1. Загрузите папку `dist/` на ваш сервер
2. Настройте CORS заголовки:

```nginx
# nginx
location /widgets/ {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, OPTIONS";
}
```

### Использование

```html
<link rel="stylesheet" href="https://your-domain.com/widgets/style.css">
<script src="https://your-domain.com/widgets/google-meet-widget.umd.js"></script>

<div id="booking-widget"></div>

<script>
  GoogleMeetBooking.init('booking-widget', {
    apiUrl: 'https://your-api.com',
    apiToken: 'your_token'
  });
</script>
```

## 🔄 Обновление версии

При каждом обновлении:

```bash
# Обновите версию
npm version patch  # 1.0.0 → 1.0.1
# или
npm version minor  # 1.0.0 → 1.1.0
# или
npm version major  # 1.0.0 → 2.0.0

# Пересоберите
npm run build

# Опубликуйте
npm publish
```

## 📝 .npmignore

Создайте файл `.npmignore`:

```
src/
node_modules/
.github/
.vscode/
*.log
.env
example.html
index.html
vite.config.ts
tsconfig.*.json
eslint.config.js
```

## 🎯 Рекомендации

**Для продакшна:**
- ✅ Используйте npm + jsDelivr (автоматический CDN)
- ✅ Версионирование: `@1.0.0` в URL для стабильности
- ✅ SRI (Subresource Integrity) для безопасности

**Для тестирования:**
- ✅ GitHub Pages (быстро и бесплатно)

**Для корпоративного использования:**
- ✅ Собственный CDN/сервер
- ✅ Приватный npm registry

## 🔒 Пример с версионированием

```html
<!-- Точная версия -->
<script src="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget@1.0.0"></script>

<!-- Последняя минорная версия 1.x.x -->
<script src="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget@1"></script>

<!-- Всегда последняя (не рекомендуется для продакшна) -->
<script src="https://cdn.jsdelivr.net/npm/@your-username/google-meet-booking-widget"></script>
```
