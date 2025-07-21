//Montaje de una copia.
const person = {name: "Dmitriy", age: 30, city: "Sevastopol"};
const personCopy = {...person};
//Montaje de una copia con un nuevo campo.
console.log (personCopy);
personCopy.age =47 ;
personCopy.country = "Russia";
console.log (personCopy);
//Montaje de una copia con un nuevo campo y un campo existente modificado.
