var dayDisplayEl = $("#currentDay");
var nineTime = $("#9AM");
var tenTime = $("#10AM");
var elevenTime = $("#11AM");
var twelveTime = $("#12AM");
var oneTime = $("#1PM");
var twoTime = $("#2PM");
var threeTime = $("#3PM");
var fourTime = $("#4PM");
var fiveTime = $("#5PM");
var submitInput = $("#Save");


renderLastText();

function renderLastText() {
    var nine = localStorage.getItem("nine");
    var ten = localStorage.getItem("ten");
    var eleven = localStorage.getItem("eleven");
    var twelve = localStorage.getItem("twelve");
    var one = localStorage.getItem("one");
    var two = localStorage.getItem("two");
    var three = localStorage.getItem("three");
    var four = localStorage.getItem("four");
    var five = localStorage.getItem("five");

    if (!nine || !ten || !eleven || !twelve || !one || !two || !three || !four || !five ) {
        return;
    }
    nineTime.textContent = nine;
    tenTime.textContent = ten;
    elevenTime.textContent = eleven;
    twelveTime.textContent = twelve;
    oneTime.textContent = one;
    twoTime.textContent = two;
    threeTime.textContent = three;
    fourTime.textContent = four;
    five.textContent = five;
}


    var nine = $("#9AM").value;
    var ten = $("#10AM").value;
    var eleven = $("#11AM").value;
    var twelve = $("12PM").value;
    var one = $("#1PM").value;
    var two = $("#2PM").value;
    var three = $("#3PM").value;
    var four = $("#5PM").value;
    var five = $("#6PM").value;

    if ( nine === "") {
        displayMessage("error" , "This section cannot be blanked");
    } else if (ten === "") {
        displayMessage("error" , "This section cannot be blanked");
    } else if (eleven === "") {
        displayMessage("error" , "This section cannot be blanked");
    } else if (twelve === "") { 
        displayMessage("error" , "This section cannot be blanked");
    } else if (twelve === "") {
        displayMessage("error" , "This section cannot be blanked");
    }  else if (one === "") {
        displayMessage("error" , "This section cannot be blanked");
    }  else if (two === "") {
        displayMessage("error" , "This section cannot be blanked");
    }  else if (three === "") {
        displayMessage("error" , "This section cannot be blanked");
    }   else if (four === "") {
        displayMessage("error" , "This section cannot be blanked");
    }   else if (five === "") {
        displayMessage("error" , "This section cannot be blanked");
    } else {
        displayMessage("success" , "Your remainder is saved!");

    var nine = localStorage.setItem("nine");
    var ten = localStorage.setItem("ten");
    var eleven = localStorage.setItem("eleven");
    var twelve = localStorage.setItem("twelve");
    var one = localStorage.setItem("one");
    var two = localStorage.setItem("two");
    var three = localStorage.setItem("three");
    var four = localStorage.setItem("four");
    var five = localStorage.setItem("five");
    renderLastText();
    }
    


function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
}





setInterval(displayTime)