var infoTicker = [
    " am a software developer",
    " enjoy making things on the web",
    " like playing video games",
    " am currently writing code",
    " like going to the cinema",
];

var currentItem = 0;
var maxItems = infoTicker.length - 1;

window.setInterval(function () {

    $("#ticker").fadeOut(function () {
        document.getElementById("ticker").innerHTML = infoTicker[currentItem];
    });

    $("#ticker").fadeIn();

    if (currentItem == (maxItems)) {
        currentItem = 0;
    } else {
        currentItem++;
    }

    console.log(currentItem);

}, 4000);
