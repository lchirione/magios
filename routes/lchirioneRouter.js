const express = require('express');
const router = express.Router();

// GET home page
router.get('/lchirione', (req, res) => {
    res.render('portfolio/lc', {title: "Lucas Chirione"});
});

module.exports = router;