function Fizzbuzz(){
}

Fizzbuzz.prototype.play = function(number){
    if (number % 3 == 0 && number % 5 == 0) {
      return ('FizzBuzz')
    } else if (number % 3 == 0) {
      return ('Fizz')
    } else if (number % 5 == 0){
      return ('Buzz')
    } else {
      return (number)
    }
}

var fizzBuzz = new Fizzbuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
