console.log("Script is loaded")

//My Calback function//

const recordatorio = function() {
    console.log("Este recordatorio aparecerá después de 7 segundos")
}
setTimeout(recordatorio, 7000);

//My Callback function as an ES6 Arrow Function//

setTimeout(() => {
    console.log("Este recordatorio aparecerá después de 7 segundos");
}, 7000);