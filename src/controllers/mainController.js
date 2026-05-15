// Home Page
exports.getHome = (req, res) => {
    res.render('home', { title: 'Welcome Home' });
};

// About Page
exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Us' });
};