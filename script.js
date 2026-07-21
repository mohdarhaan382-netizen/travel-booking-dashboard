// ================================
// Travel Booking Dashboard
// JavaScript
// ================================

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Animated Booking Counter
let count = 0;
const booking = document.getElementById("bookingCount");

const counter = setInterval(() => {

    count++;

    booking.innerHTML = count;

    if (count >= 245) {
        clearInterval(counter);
    }

}, 10);

// Book Now Buttons
const buttons = document.querySelectorAll(".bookBtn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("🎉 Booking Successful!\n\nThank you for choosing TravelGo.");

    });

});

// Search Button
const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const destination =
        document.querySelector(".search-box input").value;

    if (destination === "") {

        alert("Please enter a destination.");

    } else {

        alert("Searching for: " + destination);

    }

});
 // Sidebar Pages

const menuItems = document.querySelectorAll(".sidebar li");

const pageContent = document.getElementById("pageContent");


menuItems.forEach(item => {


item.addEventListener("click",()=>{


menuItems.forEach(menu=>{
menu.classList.remove("active");
});


item.classList.add("active");


let page=item.dataset.page;


if(page=="dashboard"){

pageContent.innerHTML=`

<h1>Welcome Back Traveller 🌍</h1>

<p>Your travel dashboard overview</p>

`;

}


else if(page=="bookings"){


pageContent.innerHTML=`

<h1>My Bookings ✈️</h1>

<div class="card">

<h3>Paris Trip</h3>

<p>Date: 20 August 2026</p>

<p>Status: Confirmed ✅</p>

</div>

<div class="card">

<h3>Dubai Holiday</h3>

<p>Date: 15 September 2026</p>

<p>Status: Pending ⏳</p>

</div>

`;

}



else if(page=="destinations"){


pageContent.innerHTML=`

<h1>Popular Destinations 🌎</h1>

<p>Paris | Dubai | Bali | London</p>

`;

}



else if(page=="payments"){


pageContent.innerHTML=`

<h1>Payment History 💳</h1>

<div class="card">

<p>Last Payment: $1200</p>

<p>Status: Successful ✅</p>

</div>

`;

}



else if(page=="profile"){


pageContent.innerHTML=`

<h1>User Profile 👤</h1>

<div class="card">

<h3>Arhaan</h3>

<p>Email: user@example.com</p>

<p>Member Since: 2026</p>

</div>

`;

}



else if(page=="settings"){


pageContent.innerHTML=`

<h1>Settings ⚙️</h1>

<div class="card">

<p>Notifications: ON</p>

<p>Theme: Available</p>

</div>

`;

}


});


});