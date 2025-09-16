const myCity = {
   city: "Seoul",
   country: "South Korea",
   population: 9746000
}
console.log(myCity);

delete myCity.population;
console.log(myCity);

const newMyCity =  {
   city: "Sevastopol",
};
console.log(newMyCity);
newMyCity["population"] = 418000;
console.log(newMyCity);

