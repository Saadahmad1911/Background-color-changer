const randomColor = function () {
    const hex = "0123456789ABCDEFG";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 17)];


    }
    return color;
};
let intervalId;
const startChangingColor  =  function(){
   function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
   }
    intervalId =setInterval(changeBgColor,1000);
};
const stopChangingColor  =  function(){
    clearInterval(intervalId);
};

  document.querySelector('#start').addEventListener('click', startChangingColor);

  document.querySelector('#stop').addEventListener('click', stopChangingColor);
