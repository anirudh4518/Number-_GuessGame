let i = 0;
let score = 100;
let x = Math.floor(Math.random() * 100);
 alert(x);
let n = prompt("Please enter the  no you want to guess: ");
while (n != x) {
  if (n < x) {
    alert("correct no is greater than that");
  }
  else if (n > x) {
    alert("correct no is less than that");

  }
  n = prompt("Please enter the number you want to guess: ");
  i++;

}
score = score - i;

alert("you guessed the right no");

alert(`Your score is: ${score} `);