const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:50000/?directConnection=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Подключено к базе данных MongoDB'))
.catch((err) => console.error('Ошибка при подключении к базе данных MongoDB:', err));

// Создание схемы и модели для данных в MongoDB
const languageSchema = new mongoose.Schema({
  code: String,
  data: Object,
});
const Language = mongoose.model('Language', languageSchema);

// Обработка запросов к корневому URL
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// Обработка запросов для получения данных о языках
app.get('/api/languages', async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
