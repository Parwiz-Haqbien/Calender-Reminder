var dayDisplayEl = $('#currentDay');
var calenderDate = $('#calender-save')
var saveButton = $('#Save')

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
    console.log(rightNow)
}

function saveLastCalender() {
    var saveCalender = {
        calenderDate:calenderDate.value, 
        saveButton: saveButton.value,
    };
    localStorage.setItem('saveCalender' , JSON.stringify(saveCalender));
}

function renderLastCalender() {
    var lastCalender = JSON.parse(localStorage.getItem('saveCalender'));
}






setInterval(displayTime)