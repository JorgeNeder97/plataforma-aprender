const express = require('express');
const router = express.Router();

// Renderiza el index en /
router.get('/', (req, res) => {
    res.render('../public/index.html');
});

module.exports = router;