# My Order

## Описание проекта

**My Order** — это веб-приложение для создания и управления рыночными ордерами. Оно состоит из фронтенд и бэкенд частей, которые взаимодействуют через API и WebSocket для обеспечения реального времени обновлений.

## Структура проекта

```
my-order/
├── frontend/
│   ├── src/ (компоненты, логика, состояние)
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/backend.js (основной серверный код)
│   ├── .env.example
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

## Установка

```
cd frontend
npm install

cd ../backend
npm install

cd `..`
```

### Настройка переменных окружения

#### Frontend
```
Фронтенд
Создайте файл .env в папке frontend на основе .env.example:

bash
Копировать код
cd frontend
cp .env.example .env
Откройте frontend/.env и установите необходимые переменные:

env
Копировать код
VITE_API_URL=http://localhost:3000
```

#### Backend

```
Бэкенд
Создайте файл .env в папке backend на основе .env.example:

bash
Копировать код
cd ../backend
cp .env.example .env
Откройте backend/.env и установите необходимые переменные:

env
Копировать код
PORT=3000
CLIENT_ORIGIN=http://localhost:5173
```

### Запуск проекта

```
cd frontend
npm run dev

cd backend
npm run dev
```