const myCity = {
   city: "Seoul"
}

myCity["popular"] = true;

console.log(myCity); // { city: "Seoul", popular: true }

const countryPropertyName = "country";
console.log(countryPropertyName); // country

myCity[countryPropertyName] = "Korea";

console.log(myCity); // { city: "Seoul", popular: true, country: "Korea" }
