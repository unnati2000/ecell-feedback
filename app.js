const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/db');
connectDB();
app.use(express.json({ extended: false }));
app.use(cors());

app.use(require('./Routes/auth'));
app.use(require('./Routes/feedback'));

app.get('/', (req, res) => {
  console.log('hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
