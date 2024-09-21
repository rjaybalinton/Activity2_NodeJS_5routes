const pal = {
    index: (req, res) => {
        res.render('index');
    },
    aboutus: (req, res) => {
        res.render('aboutus');
    },
    profile: (req, res) => {
        res.render('profile');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    services: (req, res) => {
        res.render('services');
    },
    blog: (req, res) => {
        res.render('blog');
    },
    team: (req, res) => {
        res.render('team');
    },
    index: (req, res) => {
        res.render('index');
    },
    price: (req, res) => {
        res.render('price');
    },
    signup: (req, res) => {
        res.render('signup');
    }
};


module.exports = pal;