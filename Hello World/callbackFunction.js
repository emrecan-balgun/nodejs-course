function soyle(text, callback) {
   console.log(text);
   callback();
}

function cayDemle() {
   console.log("çay demleniyor...");
}

soyle("merhaba", cayDemle);