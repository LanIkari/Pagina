var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PeliculaSchema=Schema({
  id:Number,
  titulo:String,
  protagonista:String,
  anio:Number,
  director:String,
  cartel:String
});

module.exports=mongoose.model('Peliculas',PeliculaSchema);
