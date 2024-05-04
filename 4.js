function mTable(inputNumber) {
  let outputStr = "";

  for (i = 1; i <= inputNumber; i++) {
    for (j = 1; j <= inputNumber; j++) {
      outputStr += " " + j * i;
    }

    outputStr += "\n";
  }

  console.log(outputStr);
}

mTable(5);
