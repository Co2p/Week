function update() {
var thisWeek = getWeekNumber(new Date())[1];
$('.week').html(thisWeek);
    setTimeout(update(), 10000);
    console.log("Gordon") 
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getFullYear(), weekNo];
}
var thisWeek = getWeekNumber(new Date())[1];
$('.week').html(thisWeek);
console.log(thisWeek);

//while(true) {
;

function executeAsync(func) {
    setTimeout(func, 0);
}

executeAsync(function() {
    alert("Test");
});
