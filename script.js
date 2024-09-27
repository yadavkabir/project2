function updateBackground() {
    // Get the current hour
    const currentHour = new Date().getHours();
    const body = document.body;

    // Define day and night background images
    const dayImage = 'day.jpg';  
    const nightImage = 'night.jpg';  

    // Set the background based on the time
    if (currentHour >= 6 && currentHour < 18) {
       
        body.style.backgroundImage = `url('${dayImage}')`;
    } else {
    // Nighttime: from 6 PM to 6 AM
        body.style.backgroundImage = `url('${nightImage}')`;
    }
}


window.onload = updateBackground;


const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});



loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

