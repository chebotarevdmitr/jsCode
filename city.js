const myCity ={city:"New York",
    info:{isPopular:true,//вложенный объект
        population:8419600,
    country:"USA"},
}
console.log(myCity.info.country);
console.log(myCity.info.isPopular) // New York
delete myCity.info["isPopular"];//скобочна запись
console.log (myCity)
const name ="Dmitriy";
const age = 30;
const person = {
    name: name,
    age: age,
    city: "Moscow",
    info: {
        isStudent: false,
        hobbies: ["reading", "gaming"]
    }
};
console.log(person); // Dmitriy