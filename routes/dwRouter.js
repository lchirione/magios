const express = require('express');
const router = express.Router();

// Pagina Certificado de desarrollo web

router.get('/lchirione/certificado', (req, res) => {
    res.render('portfolio/certificado', {title: 'Certificado'});
});

module.exports = router;