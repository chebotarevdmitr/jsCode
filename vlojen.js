// Вложенные объекты

const myCity = {
   city: 'Moscow',
   info: {
      population: 20_000_000,
      country: 'Russia'          //info - вложенный объект
   }
}
console.log(myCity.info.country); // Russia
console.log(myCity['info']['country']); // Russia
console.log(myCity.city, myCity.info.population, myCity.info.country); // Moscow 20000000 Russia

delete myCity.info.population; // удаление свойства population из вложенного объекта info
console.log(myCity); // { city: 'Moscow', info: { country: 'Russia' } }