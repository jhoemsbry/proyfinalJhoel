var models = require('../models/models.js');
var reclamo = {tipoReclamo:'odeco',
				observacion:'mal servicio',
				fecha:'26/11/2016'}
exports.principal = function(req, res, next) {
                 models.reclamo.findAll().then( function(reclamos){
                       res.render('index',{ title:'Proyecto Final', 
                         subtitle: 'Avances en computacion',
                          reclamos: reclamos
                             });
                              });
                

					 }

exports.registroreclamo=function(req, res) {


  res.render('registroReclamo', {reclamo: reclamo });
   }
exports.guardarReclamo = function(req, res) {
	console.log("ingresa a guardar");
	reclamo = models.reclamo.build (req.body.reclamo);
    //a continuacion guardamos los campos que recibimos del formulario
    reclamo.save	({fields:["tipoReclamo",
    					      "observacion",
    					      "fecha"
    					  ]
}).then(function(){
    			 	console.log("ingresa a redirect");
    			 	res.render('reclamoRespuesta', {mensaje: 'Reclamo Guardado' });
    			 });  
console.log(reclamo);
                     	
};


 		               
                                              

