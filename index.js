const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./src'));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server Running",
    })
});

app.listen(PORT, (e) => {
    console.log(`Server running on PORT : ${PORT}`);
})