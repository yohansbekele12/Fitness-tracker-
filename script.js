const rage = 40;  
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
  // iternary operation for decrese and increase in value 
  percentageDisplay.innerHTML = `${rage}% <span class="${rage < 50 ? 'svg-green' : 'svg-red'}">${rage < 50 ? '&#9650;' : '&#9660;'}</span>`;
     }   

function displayDate(){
  const calenders=document.querySelectorAll(".Tcalendar");
  const date=new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
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
percentageDisplays()
displayGraph();
displayDate();