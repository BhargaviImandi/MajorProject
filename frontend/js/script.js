document.addEventListener("DOMContentLoaded",()=>{

const bookingForm=document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

const booking={

name:document.getElementById("name").value,

stylist:document.getElementById("stylist").value,

service:document.getElementById("service").value,

date:document.getElementById("date").value,

time:document.getElementById("time").value

};

localStorage.setItem(

"booking",

JSON.stringify(booking)

);

alert("Appointment Booked Successfully!");

window.location.href="mybookings.html";

});

}

loadBookings();

});

function loadBookings(){

const table=document.getElementById("bookingTable");

if(!table) return;

const booking=JSON.parse(

localStorage.getItem("booking")

);

if(!booking) return;

table.innerHTML+=`

<tr>

<td>${booking.date}</td>

<td>${booking.service}</td>

<td>${booking.stylist}</td>

<td>Confirmed</td>

</tr>

`;

}