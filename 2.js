function commonDivider(userdata) {
  let userarray = userdata;
  let newarray = [];

  let digitCheck;

  for (let i = 2; i < 100000; i++) {
    digitCheck = true;

    userarray.forEach((element) => {
      if (element % i !== 0) {
        digitCheck = false;
      }
    });

    if (digitCheck === true) {
      newarray.push(i);
    }
  }
  console.log(newarray);
  return newarray;
}

alert(commonDivider([42, 12, 18]));
