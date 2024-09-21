const express = require('express');
const router = express.Router();
const rjay = require('../controller/rjay');  



router.get('/index', rjay.index);                   
router.get('/aboutus', rjay.aboutus);     
router.get('/contact', rjay.contact); 
router.get('/profile', rjay.profile); 
router.get('/services', rjay.services); 
router.get('/blog', rjay.blog);
router.get('/team', rjay.team);
router.get('/feedback', rjay.feedback);
router.get('/price', rjay.price);
router.get('/signup', rjay.signup);
module.exports = router;