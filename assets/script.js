const minHour = 9;
const maxHour = 17;

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

function colorCode(hour) {
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


  function start(){
    const memo = JSON.parse(localStorage.memo);
    for (var i = minHour; i <= maxHour; i += 1) {
      if(memo[`memo${i}`]){
        $(`#${i}`)[0].innerHTML = memo[`memo${i}`];
      }
    }
  }
  
  for (var i = minHour; i <= maxHour; i += 1) {
    $(`#${i}`).addClass(colorCode(i));
    $(`#${i}~button`).click({ hour: i }, save);
  }
  
  start();
