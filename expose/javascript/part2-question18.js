let currTime = setInterval(myCallback, 1000);

function myCallback() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}