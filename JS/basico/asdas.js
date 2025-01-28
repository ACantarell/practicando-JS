let personas = [
    { nombre: "Amadeo", edad: 31, profesion: "Desarrollador" },
    { nombre: "Cantarell", edad: 28, profesion: "Diseñador" },
    { nombre: "Velez", edad: 35, profesion: "Analista" },
    { nombre: "Amalfitani", edad: 29, profesion: "QA Tester" }
  ];

let mapeoDePersonas = personas.map(elemento => elemento.profesion)

console.log(mapeoDePersonas.find("Amadeo"));