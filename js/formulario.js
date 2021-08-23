// JavaScript Document
function MostrarDatos()
{
    let Pasatiempos = ["Estudiar", "Ejercicio","Peliculas", "Bailar", "Cantar"];
    var pasatiempo = pasatiempos[document.getElementById("pasatiempos").selectedIndex];
	
	var nom=prompt("Ingresa tu nombre: ");
	document.getElementById("info").innerHTML = `${nom}`;
	
    var nombre = document.getElementById("nombre").value;
    var apellidop = document.getElementById("apellidop").value;
    var apellidom = document.getElementById("apellidom").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.formulario.sexo.value;
    var fecha = document.getElementById("fechadenacimiento").value;
	
	

    if (edad > 25 & pasatiempo == "Ejercicio")
        {
            alert(
                "Nombre: " + nombre + " " + apellidop + " " + apellidom + "\n" +
                "Pasa tiempo favorito: " + pasatiempo + "\n\n" +
                "Aceptado al puesto de programacion."
                 )
        }
    else if (edad >= 30 & edad <= 50)
        {
            alert("Nombre: " + nombre + " " + apellidop + " " + apellidom +
                  "\nFecha de nacimiento: " + fecha +
                  "\n" + "Aceptado al puesto de redes.");
        }
    else if (sexo == "femenino" & pasatiempo== "Estudiar")
        {
            alert("Nombre: " + nombre + " " + apellidop + " " + apellidom +
                  "\nEdad: " + edad +
                  "\n" + "Aceptado al puesto de lider de ...");
        }
    else if (edad > 0 & nombre != "")
        {
            alert("Nombre: " + nombre + " " + apellidop + " " + apellidom +
                  "\nEdad: " + edad +
                  "\nFecha de nacimiento: " + fecha +
                  "\nSexo: " + sexo);
        }
    else
    {
        console.log("No hay nada que mostrar.");
    }
}