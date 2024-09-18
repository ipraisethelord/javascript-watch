document.addEventListener('DOMContentLoaded', function() {
    const currentDate = document.querySelector('.calendar-current-date');
    const datesContainer = document.querySelector('.calendar-dates');
    const prevButton = document.getElementById('calendar-prev');
    const nextButton = document.getElementById('calendar-next');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let today = date.getDate();

    const renderCalendar = () => {
        datesContainer.innerHTML = '';
        currentDate.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            datesContainer.innerHTML += `<li></li>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            if (i === today && month === new Date().getMonth() && year === new Date().getFullYear()) {
                datesContainer.innerHTML += `<li class="current-day">${i}</li>`;
            } else {
                datesContainer.innerHTML += `<li>${i}</li>`;
            }
        }
    };

    prevButton.addEventListener('click', () => {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        date = new Date(year, month);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        date = new Date(year, month);
        renderCalendar();
    });

    renderCalendar();
});
