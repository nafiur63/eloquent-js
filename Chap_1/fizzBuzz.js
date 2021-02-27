const fizzBuzz = (b) => {
    let a = 0;
    while (a <= b) {
      a % 3 === 0 && a % 5 === 0
        ? console.log("fizzbuzz")
        : a % 3 === 0
        ? console.log("Fizz")
        : a % 5 === 0
        ? console.log("Buzz")
        : console.log(a);
      a++;
    }
  };
  //let u = Number(window.prompt("Give a number"))
  fizzBuzz(100)

  