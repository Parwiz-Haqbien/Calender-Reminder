var dayDisplayEl = $('#currentDay');


function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
    console.log(rightNow)
}





setInterval(displayTime)