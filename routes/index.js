var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');


/* GET home page. */
router.get('/', reclamoController.principal );
router.get('/RegistroReclamo', reclamoController.registroreclamo);
router.post('/guardarReclamo',reclamoController.guardarReclamo);


module.exports = router;
