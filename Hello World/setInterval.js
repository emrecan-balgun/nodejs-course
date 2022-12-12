let sayi = 1;

let interval = setInterval(function () {
   if(sayi == 5)
      clearInterval(interval);
   
   console.log("sayi: " + sayi);
   sayi++;
}, 1000);