function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if (h > 12) {
        h = h - 12;
        session = "PM";
    } else if (h === 12) {
        session = "PM";
    } else if (h == 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").textContent = time;
    document.getElementById("clockDisplaySameSize").textContent = time;
    setTimeout(showTime, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    showTime();
});