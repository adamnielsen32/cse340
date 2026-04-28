require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

// Environment variables
const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup (MUST come before routes)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Routes
const mainRoutes = require('./src/routes/mainRoutes');
app.use('/', mainRoutes);

app.get('/student', (req, res) => {
    const student = {
        name: 'John Doe',
        id: '123456',
        email: 'johndoe@example.com',
        address: '123 Main St, Rexburg, ID'
    };

    res.render('student', {
        title: 'Student Information',
        student: student
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
});