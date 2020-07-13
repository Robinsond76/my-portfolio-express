const router = require('express').Router();

router.get('/', (req, res) => res.render('home', { homepage: true }));
router.get('/learning', (req, res) => res.render('learning'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;
