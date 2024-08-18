 const home=document.querySelector(".home");

home.addEventListener('click' , event=>{
    event.preventDefault();
     const audio=new Audio('fuck-sound-effect.mp3');
    displayCurrectData();
    
});

function displayCurrectData(){
  const instantinfo=document.querySelector(".grid-container-activity-detail");
  const instantinfo2=document.querySelector('.grid-container-runnning-detail');
  const time=document.getElementById("time");
  
  instantinfo.classList.remove('hidden');
  instantinfo.offsetHeight;
  instantinfo2.classList.remove('hidden');
  instantinfo2.offsetHeight;
  
  instantinfo.classList.add('show');
  instantinfo2.classList.add('show');
  
}