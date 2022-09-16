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
var btnDisplay = $("button")

var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);

    console.log(btnDisplay)


    btnDisplay.on('click' , function(){
        console.log(this)
        console.log(this.id)
        var inputEl;
        var realnumber = parseInt(this.id)
        if(realnumber +12<12) {
            inputEl = $("#"+this.id + "AM")
        } else{
            inputEl = $("#"+this.id + "PM")
        }
        console.log(inputEl)
        localStorage.setItem(this.id , inputEl.val())
    })

