// 1. Funksiya yazın, bu funksiya parametr olaraq bir söz qəbul etsin. 
// Daha sonra bu sözü tərsinə çevirsin.



function reverseWord(insideword){
    return insideword.split('').reverse().join('');


}

let insideword = "Hello world";
let lefttoright = reverseWord (insideword);

console.log(lefttoright);


// 2. "Never give up"  cümləsində " e"  hərfinin neçə
//  dəfə istifadə olundugunu göstərən funksiya yazın.

function findabs (sentence){
    num=0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === 'e') {
            num++
           
        }
}
  return num
}
let sentence = "Never give up";
let abs = findabs(sentence);

 console.log(abs);


// 3. Aşağıda göstərilən bu 3 şərtə görə bir funksiya yazın
//  Funksiyada capacity  ilə göstərilən şərtləri yoxladıqdan sonra 
//  console a capacity i  və maşının type  göstərin.
//  Example :  ['medium mercedes', small bmw', 'large ford', 'large bmw']
//  .Map metodundan istifadə edərsiz.
 
// small car = 1-3 people
// medium car = 4-5 people
// large car = 6-9 people


const cars = [
    {
      color: "red",
      type: "mercedes",
      capacity: 5,
      price: 120,
    },
    {
      color: "blue",
      type: "bmw",
      capacity: 2,
      price: 70,
    },
    {
      color: "blue",
      type: "ford",
      capacity: 6,
      price: 220,
    },
    {
      color: "blue",
      type: "bmw",
      capacity: 6,
      price: 400,
    },
  ];



let carResult= cars.map((car)=>{

if(car.capacity <=3){
 return ` ${car.type} small`;
 }
 else if(car.capacity <=5){
 return ` ${car.type} medium`;
 }
 else if(car.capacity<=9){
 return `${car.type} large ` ;
 }
 })
 console.log(carResult);
//   function checkCarType(cars) {
//     for (let i = 0; i < cars.length; i++) {
//         const car = cars[i];
//         const { capacity, type } = car;
//         let carType = "";

//         if (capacity >= 1 && capacity <= 3) {
//            return carType = "small car";
//         } else if (capacity >= 4 && capacity <= 5) {
//            return carType = "medium car";
//         } else if (capacity >= 6 && capacity <= 9) {
//             return carType = "large car";
//         } 
          
      
//     }
    
// }
// console.log(checkCarType(cars));


// 4.Eyni arrayin daxilində rəngi göy olan maşınların 
// qiymətində 30 % endirim edin.
// Filter və Map metodundan istifadə edərsiz



  let salecars = cars.map(car => {
    if (car.color == 'blue') {
        car.price *= 0.7; // 
    }
    return car;
});
 


  console.log(salecars);