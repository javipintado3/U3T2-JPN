
function Socio() {
    this.numSocio = 0;
    this.dni = "";
    this.nombre = "";
    this.apellido = "";
    this.fechaNac = "";
    this.localidad = "";
}

function Socio(numSocio, dni, nombre, apellido, fechaNac, localidad) {
    this.numSocio = numSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.localidad = localidad;
}

let socio1 = new Socio(1, "12345678A", "Juan", "Pérez", "1990-05-10", "Madrid");
let socio2 = new Socio(2, "23456789B", "Ana", "García", "2008-03-15", "Barcelona");
let socio3 = new Socio(3, "34567890C", "Luis", "Sánchez", "1995-09-20", "Valencia");

const socios = [socio1, socio2, socio3];

/**
 * Funcion que crea un socio en el array
 */
function altaSocio() {
    s = new Socio();
    res = prompt("Dime el numero de socio: ");
    s.numSocio = res;
    res = prompt("Dime el dni del socio:");
    s.dni = res;
    res = prompt("Dime el nombre del socio");
    s.nombre = res;
    res = prompt("Dime el apellido del socio");
    s.apellido = res;
    res = prompt("Dime la fecha de nacimiento del socio");
    s.fechaNac = res;
    res = prompt("Dime la localidad del socio");
    s.localidad = res;

    socios.push(s);
}

/**
 * Funcion que borra un socio del array.
 */
function bajaSocio() {
    let eleccion = parseInt(prompt("Elige una opción: \n 1.Por el dni \n 2.Por el numero de socio"));
    switch (eleccion) {
        case 1:
            let pordni = prompt("Dime el dni:");
            let indiceDNI = socios.findIndex((socio) => socio.dni === pordni);
            if (indiceDNI != -1) {
                socios.splice(indiceDNI, 1);
                alert("Se ha eliminado el socio con el dni: " + pordni);
            } else {
                alert("Socio con " + pordni + " no encontrado");
            }
            break;
        case 2:
            let porSocio = prompt("Dime el numero de socio");
            let indiceSocio = socios.findIndex((socio) => socio.numSocio === porSocio);
            if (indiceSocio != -1) {
                socios.splice(indiceSocio, 1);
                alert("Se ha eliminado el socio con el numero de socio: " + porSocio);
            } else {
                alert("Socio con " + porSocio + " no encontrado");
            }
            break;
        default: alert("No existe esa opción");
    }
}

/**
 * Funcion que modifica la localidad de un socio buscado por el dni.
 */
function modificarPorLocalidad() {
    let dni = prompt("Dime el dni del socio al que quieras borrar la localidad");
    let indiceDNI = socios.findIndex((socio) => socio.dni === dni);
    if (indiceDNI != -1) {
        let nuevaLocalidad = prompt("Escribe una nueva localidad: ");
        socios[index].localidad = nuevaLocalidad;
    } else {
        alert("Socio con " + dni + " no encontrado");
    }
}

/**
 * Funcion que muestra la categoria segun la edad del socio.
 * 
 * @param {String} fechaNacimiento 
 * @returns 
 */
function mostrarCategoria(fechaNacimiento) {

    let fechaNac = new Date(fechaNacimiento);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    if (edad >= 8 && edad <= 9) {
        return "Benjamín";
    }
    if (edad >= 10 && edad <= 11) {
        return "Alevín";
    }
    if (edad >= 12 && edad <= 13) {
        return "infantil";
    }
    if (edad >= 14 && edad <= 15) {
        return "Cadete";
    }
    if (edad >= 16 && edad <= 18) {
        return "Juvenil";
    }
    if (edad >= 19) {
        return "Senior";
    }
}

/**
 * Funcion que muestra todo el contenido del array socios en el html con su categoria
 */
function mostrarTodosLosSocios() {
    socios.forEach((socio) => {
        let categoria = mostrarCategoria(socio.fechaNac);
        document.write("<p>Número de socio: " + socio.numSocio + "<br>"
            + "DNI: " + socio.dni + "<br>"
            + "Nombre: " + socio.nombre + "<br>"
            + "Apellidos: " + socio.apellido + "<br>"
            + "Fecha nacimiento: " + socio.fechaNac + "<br>"
            + "Localidad: " + socio.localidad + "<br>"
            + "Categoría: " + categoria + "</p>");
    });
}

/**
 * Funcion que busca el socio por el dni, nombre o apellido.
 */
function buscarSocio() {
    let eleccion = parseInt(prompt("Elige una opción: \n 1.Por el dni \n 2.Por el nombre \n 3.Por el apellido"));
    switch (eleccion) {
        case 1:
            let pordni = prompt("Dime el DNI:");
            let socioEncontradoDNI = socios.find((socio) => socio.dni === pordni);
            if (socioEncontradoDNI) {
                alert("Socio encontrado:\n" +
                    "Número de socio: " + socioEncontradoDNI.numSocio + "\n" +
                    "DNI: " + socioEncontradoDNI.dni + "\n" +
                    "Nombre: " + socioEncontradoDNI.nombre + "\n" +
                    "Apellidos: " + socioEncontradoDNI.apellido + "\n" +
                    "Fecha de nacimiento: " + socioEncontradoDNI.fechaNac + "\n" +
                    "Localidad: " + socioEncontradoDNI.localidad);
            } else {
                alert("Socio con DNI " + pordni + " no encontrado.");
            }
            break;
        case 2:
            let porNombre = prompt("Dime el nombre");
            let socioEncontradoNombre = socios.find((socio) => socio.nombre === porNombre);
            if (socioEncontradoNombre) {
                alert("Socio encontrado:\n" +
                    "Número de socio: " + socioEncontradoNombre.numSocio + "\n" +
                    "DNI: " + socioEncontradoNombre.dni + "\n" +
                    "Nombre: " + socioEncontradoNombre.nombre + "\n" +
                    "Apellidos: " + socioEncontradoNombre.apellido + "\n" +
                    "Fecha de nacimiento: " + socioEncontradoNombre.fechaNac + "\n" +
                    "Localidad: " + socioEncontradoNombre.localidad);
            } else {
                alert("Socio con nombre " + porNombre + " no encontrado.");
            }
            break;
        case 3:
            let porApellido = prompt("Dime el apellido");
            let socioEncontradoApellido = socios.find((socio) => socio.apellido === porApellido);
            if (socioEncontradoApellido) {
                alert("Socio encontrado:\n" +
                    "Número de socio: " + socioEncontradoApellido.numSocio + "\n" +
                    "DNI: " + socioEncontradoApellido.dni + "\n" +
                    "Nombre: " + socioEncontradoApellido.nombre + "\n" +
                    "Apellidos: " + socioEncontradoApellido.apellido + "\n" +
                    "Fecha de nacimiento: " + socioEncontradoApellido.fechaNac + "\n" +
                    "Localidad: " + socioEncontradoApellido.localidad);
            } else {
                alert("Socio con apellido " + porApellido + " no encontrado.");
            }
            break;
        default: alert("No existe esa opción");
    }
}


/**
 * Funcion para mostrar el menu de la aplicación.
 */
function mostrarMenu() {
    let opcion;
    while (opcion != 9) {
        opcion = parseInt(prompt("Menú de opciones:\n" +
            "1. Alta de un nuevo socio\n" +
            "2. Baja de un socio\n" +
            "3. Modificar la localidad de un socio\n" +
            "4. Mostrar categoría de un socio (dada su fecha de nacimiento)\n" +
            "5. Mostrar todos los datos de los socios\n" +
            "6. Buscar socio por DNI o nombre y apellidos\n" +
            "7. Buscar socios de una categoría\n" +
            "8. Mostrar socios de una localidad\n" +
            "9. Salir"));

        switch (opcion) {
            case 1: altaSocio(); break;
            case 2: bajaSocio(); break;
            case 3: modificarPorLocalidad(); break;
            case 4: mostrarCategoria(); break;
            case 5: mostrarTodosLosSocios(); break;
            case 6: buscarSocio(); break;
            case 9: alert("Saliendo del menú."); break;
            default: alert("No existe esa opción.")
        }
    }
}

mostrarMenu();







