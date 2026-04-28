// Home Page
exports.getHome = (req, res) => {
    res.render('home', { title: 'Welcome Home' });
};

// About Page
exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Me' });
};

// Products Page
exports.getProducts = (req, res) => {
    res.render('products', { title: 'Our Products' });
};