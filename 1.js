function caseEnding (userdata) {

let lastnumber = Number(userdata[userdata.length - 1]);

let secondlastnumber = Number(userdata[userdata.length - 2]);

console.log(secondlastnumber);

let ending;

if (lastnumber === 1 && secondlastnumber !== 1) {
  ending = "";
} else if (lastnumber === 1 && secondlastnumber === 1) {
  ending = "ов";
} else if (lastnumber === 0) {
  ending = "ов";
} else if (lastnumber >= 2 && lastnumber <= 4 && secondlastnumber === 1) {
  ending = "ов";
} else if (lastnumber >= 2 && lastnumber <= 4 && secondlastnumber !== 1) {
  ending = "а";
} else if (lastnumber >= 5 && lastnumber <= 9) {
  ending = "ов";
}

return userdata + " компьютер" + ending;

};

alert (caseEnding(prompt("Введите целое число")));
