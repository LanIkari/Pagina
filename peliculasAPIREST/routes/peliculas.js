var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Pelicula=require('../modelos/peliculas');


/* GEND POINT get all peliculas*/
router.get('/', function(req, res, next) {
  Pelicula.find({},(err,datos)=>{
    if(err){
      res.json({'error':'error al hacer la consulta'});
    }else{
      res.status(200).json(datos);
    }
  });
  });

  router.get('/:idPeli', function(req, res, next) {
    Pelicula.findOne({'id':req.params.idPeli},(err,datos)=>{
      if(err){
        res.json({'error':'error al hacer la consulta'});
      }else{
        res.status(200).json(datos);
      }
    });
    });

router.delete('/:idPeli',(req,res,next)=>{
  Pelicula.deleteOne({'id':req.params.idPeli},(err)=>{
    if(err){
      res.json({'error':'error al hacer la consulta'});
    }else{
      res.json({'mensaje':'OK'});
    }
  });
  });

router.post('/',(req,res,next)=>{
  var peli = Pelicula({
    id: req.body.id,
    titulo: req.body.titulo,
    protagonista: req.body.protagonista,
    anio: req.body.aestreno,
    director: req.body.direc,
    cartel: req.body.foto
});

peli.save((err,data)=>{
  if(err){
    res.json({'error':"Error al insertar"});
  }else{
    res.status(200).json(data);
    }
  });
});



module.exports = router;
