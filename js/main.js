var datetime = new Date();
var date = '';
var weekday = "";
var week = datetime.getDay();
switch (week) {
    case 0:
        weekday = "星期日"; break;
    case 1:
        weekday = "星期一"; break;
    case 2:
        weekday = "星期二"; break;
    case 3:
        weekday = "星期三"; break;
    case 4:
        weekday = "星期四"; break;
    case 5:
        weekday = "星期五"; break;
    case 6:
        weekday = "星期六"; break;
}
date = `${datetime.getFullYear()}年${parseInt(datetime.getMonth()) + 1}月${datetime.getDate()}日${weekday}`;
var timerID = window.setInterval("showtime()", 1000);

function showtime() {
    let datetime = new Date();
    let time = "";
    time += datetime.getHours() < 10 ? `0${datetime.getHours()}:` : `${datetime.getHours()}:`;
    time += datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}:` : `${datetime.getMinutes()}:`;
    time += datetime.getSeconds() < 10 ? `0${datetime.getSeconds()}` : `${datetime.getSeconds()}`;
    document.getElementById("date-time").innerHTML = `${date} ${time}`;
}

