function birinci(callback) {
   setTimeout(function () {
      console.log("birinci fonksiyon");
      callback(ucuncu);
   }, 1000);

}

function ikinci(callback) {
   setTimeout(function () {
      console.log("ikinci fonksiyon");
      callback();
   }, 2000);
}

function ucuncu() {
   console.log("ucuncu fonksiyon");
}

birinci(ikinci);

