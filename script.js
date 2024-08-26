const rage = 70;  
const percentageDisplay = document.querySelector(".percentagedisplay");



function displayGraph() {

 const bars = document.querySelectorAll(".bar");
 const barContainers = document.querySelectorAll(".bar-ct");

if (rage === 0) {
  bars.forEach(bar => bar.style.height = '0px'); 
  percentageDisplay.textContent = '0%'; 
  return;
}

barContainers.forEach((container, index) => {
    const containerHeight = container.clientHeight;
    const bar = container.querySelector(".bar");
    const barHeight = Math.min(rage / 100 * containerHeight, containerHeight);
    bar.style.height = `${barHeight}px`; 
});
}


function  percentageDisplays(){
  // iternary operation for decrease and increase in value 
  percentageDisplay.innerHTML = `${rage}% <span class="${rage < 50 ? 'svg-red' : 'svg-green'}">${rage < 50 ? '&#9660;' : '&#9650;'}</span>`;
     }   

function displayDate(){                                                                                   
  const calenders=document.querySelectorAll(".Tcalendar");                                                   
  const date=new Date();
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today=date.getDate();
  const index=date.getMonth();
  const year=date.getFullYear();
  const month=months[index];
  calenderString=`${today} ${month} ,${year}`;
  
  calenders.forEach(calender=>{
   calender.textContent=calenderString;
  });
  
}

function displayClock(event){
  
  
  const calendarContainer = document.getElementById('calendars');

  // Days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Current date
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay(); // Day of the week (0-6)
  
  // Function to get the date for each day in the current week
  function getWeekDates(currentDate) {
      const startOfWeek = new Date(currentDate); // Clone current date
      startOfWeek.setDate(currentDate.getDate() - currentDayIndex); // Set to Sunday of current week

      const weekDates = [];
      for (let i = 0; i < 7; i++) {
          const day = new Date(startOfWeek); // Clone startOfWeek
          day.setDate(startOfWeek.getDate() + i); // Increment by day
          weekDates.push(day);
      }
      return weekDates;
  }

  // Get the current week's dates
  const weekDates = getWeekDates(currentDate);

  // Create calendar dynamically
  weekDates.forEach((date) => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');

      // Add day name
      const dayNameDiv = document.createElement('div');
      dayNameDiv.classList.add('day-name');
      dayNameDiv.textContent = daysOfWeek[date.getDay()]; // Get day name from date object
      dayDiv.appendChild(dayNameDiv);

      // Add day date
      const dayDateDiv = document.createElement('div');
      dayDateDiv.classList.add('day-date');
      dayDateDiv.textContent = date.getDate(); // Get date from date object
      dayDiv.appendChild(dayDateDiv);

      // Highlight current day if matches
      if (date.toDateString() === currentDate.toDateString()) {
          dayDiv.classList.add('selected');
      }

      // Add click event to highlight selected day
      dayDiv.addEventListener('click', () => {
          document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
          dayDiv.classList.add('selected');
      });

      // Append to calendar container
      calendarContainer.appendChild(dayDiv);
  });
}


// script.js
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('fitnessChart').getContext('2d');
  
  const fitnessChart = new Chart(ctx, {
      type: 'line', // You can change this to 'bar', 'radar', etc.
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // X-axis labels
          datasets: [{
              label: 'Steps Taken',
              data: [3000, 5000, 7000, 10000, 12000, 15000, 18000], // Data points
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              x: {
                  beginAtZero: true
              },
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});

percentageDisplays();
displayGraph();
displayDate();
displayClock()