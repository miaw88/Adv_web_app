const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("The first route my home");
      resolve(1);
    }, 2000);
  });
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("The second route my home");
      resolve(2);
    }, 4000);
  });
  
  Promise.race([p1, p2]).then(function (result) {
    console.log(result);
  });
  