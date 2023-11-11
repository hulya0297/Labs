let arg = prompt("Where is your Country?");
switch (arg) {
  case 'Azerbaijan':
  
   alert( 'the capital of Azerbaijan is Baku' );
    break;

  case 'Turkey':
    alert( 'the capital of Turkey is Ankara' );
    break;

  case 'Germany':
    alert( 'the capital of Turkey is Berlin' );
    break;
  default:
    alert( 'An unknown value' );
}





let second = parseInt(prompt("Saniye daxil edin"));
let minute = Math.floor(second/60);
let leftsecond = second % 60;

alert(minute + "deqiqe" + leftsecond + "saniye");




function findfactorial(num) {
    return (num <= 1) ? 1 : num * findfactorial(num - 1);
}

const input = prompt("Faktorialini tapmaq istediyiniz ededi daxil edin:");
const num = parseInt(input);


    const factorial = findfactorial(num);
    alert(`${num} ededin faktoriali: ${factorial}`);
