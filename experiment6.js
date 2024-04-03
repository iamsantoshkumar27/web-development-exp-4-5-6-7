sum1 = 0;
    count1 = 0;
    while (count1 < 5) {
      let number1 = parseInt(prompt("Enter integer number:"));
      if (!isNaN(number1)) {
        sum1 += number1;
        count1++;
      } else {
        alert("Invalid !  enter a valid integer.");
      }
    }
    document.write("The sum of numbers using while loop is: " + sum1 + "<br>");

    // Using for loop
    let sum2 = 0;
    for (count2 = 0; count2 < 5; count2++) {
       number2 = parseInt(prompt("Enter an integer number:"));
      if (!isNaN(number2)) {
        sum2 += number2;
      } else {
        alert("Invalid ! enter a valid integer.");
      }
    }
    document.write("The sum of numbers using for loop is: " + sum2 + "<br>");