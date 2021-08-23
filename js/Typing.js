
var i = 0;
var txt = 'Mi nombre es Alain Eustaquio Rivera Rios tengo 29 anios, soy originario del municipio de Ixmiquilpan en el estado de Hidalgo. Actualmente estoy estudiando en la Universidad Tecnologica del Valle del Mezquital (UTVM) cursando el 3er cuatrimestre en el P.E. Desarrollo de Software Multiplataforma';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}