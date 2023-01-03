const minHour = 9;
const maxHour = 17;

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

function classSelection(hour) {
  var currentTime = moment().hour();
  if (hour < currentTime) {
    return "past";
  } else if (hour > currentTime) {
    return "future";
  } else {
    return "present";
  }
}

function save(schedule) {
    const memo = localStorage.memo ? JSON.parse(localStorage.memo) : {};
    memo[`memo${schedule.data.hour}`] = $(`#${schedule.data.hour}`)[0].value;
    localStorage.setItem("memo", JSON.stringify(memo));
  }
