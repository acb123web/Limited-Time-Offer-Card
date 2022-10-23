$(document).ready(function () {

    var countDownDate = new Date("Oct 22, 2022 11:16:25").getTime();

    var x = setInterval(function (){
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000 );

        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        document.getElementById('time').innerHTML = hours + ":"+ minutes +":"+ seconds;

        if(distance < 0){
            clearInterval(x);
            document.getElementById('time').innerHTML = "EXPIRED";
        }
    }, 1000);


    $(".popup-header").click(function (){
        $(".popup-body").toggle();
    });


});