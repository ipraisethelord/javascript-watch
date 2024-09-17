// script.js 
// Function to display the time 
function showTime() { 
	// Using Date object to get 
	// today's date and time 
	let date = new Date(); 

	// getHOurs() function is used 
	// to get hours ones 
	let h = date.getHours(); // 0 - 23 

	// getMinutes() function is 
	// used to get minutes ones 
	let m = date.getMinutes(); // 0 - 59 

	// getSecond() function is 
	// used to get seconds ones 
	let s = date.getSeconds(); // 0 - 59 

	// To show am or pm 
	let session = "AM"; 

	// Setting time for 12 Hrs format 
	if (h > 12) { 
		h = h - 12; 
		session = "PM"; 
	} else if (h === 12) { 
		session = "PM"; 
	} else if (h == 0) { 
		h = 12; 
	} 

	// Adding "0" before single digit 
	h = h < 10 ? "0" + h : h; 
	m = m < 10 ? "0" + m : m; 
	s = s < 10 ? "0" + s : s; 

	let time = h + ":" + m + ":" + s + " " + session; 

	// Using DOM element to display 
	// elements on screen 
	document.getElementById("MyClockDisplay").innerText = 
		time; 

	document.getElementById("MyClockDisplay").textContent = 
		time; 

	// Call the function every second use 
	// setInterval() method and set time-interval 
	// as 1000ms which is equal to 1s 
	setTimeout(showTime, 1000); 
} 

showTime();
