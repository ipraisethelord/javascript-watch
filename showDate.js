
function showDate() {
    var now = new Date();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    date = date < 10 ? '0' + date : date;
    document.getElementById("dateDisplay").textContent = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
}
// ensure that the JavaScript runs only after the DOM elements are available, prevent null error
document.addEventListener("DOMContentLoaded", function() {
    showDate();
});