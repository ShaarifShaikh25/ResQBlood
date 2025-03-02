// Store registered donors in memory (you can replace this with a backend API in the future)
let donors = [];

// SOS Alert function
function sendSOSAlert() {
    alert("SOS Alert Sent! Your location has been shared.");
    console.log("SOS alert sent");
}

// Function to register a donor
function registerDonor() {
    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const location = document.getElementById("location").value;

    if (!name || !location) {
        alert("Please fill in all fields.");
        return;
    }

    const donor = { name, bloodGroup, location };
    donors.push(donor);
    alert("Donor registered successfully!");

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("location").value = '';
    document.getElementById("bloodGroup").value = 'A+';

    updateDonorList();
}

// Function to search for donors based on blood group and location
function findDonors() {
    const bloodGroup = document.getElementById("searchBloodGroup").value;
    const location = document.getElementById("searchLocation").value.toLowerCase();

    const foundDonors = donors.filter(donor => 
        donor.bloodGroup === bloodGroup && donor.location.toLowerCase().includes(location)
    );

    displayFoundDonors(foundDonors);
}

// Function to display found donors
function displayFoundDonors(foundDonors) {
    const donorsListDiv = document.getElementById("donorsList");
    donorsListDiv.innerHTML = '';

    if (foundDonors.length === 0) {
        donorsListDiv.innerHTML = "<p>No donors found for this search.</p>";
    } else {
        const list = document.createElement("ul");
        foundDonors.forEach(donor => {
            const listItem = document.createElement("li");
            listItem.textContent = `${donor.name} - ${donor.bloodGroup} - ${donor.location}`;
            list.appendChild(listItem);
        });
        donorsListDiv.appendChild(list);
    }
}

// Function to check blood stock
function checkBloodStock() {
    alert("Checking blood bank stock...");
    console.log("Blood bank stock checked");
}

// Function to update the donor list on the page
function updateDonorList() {
    const donorsListDiv = document.getElementById("donorsList");
    const list = document.createElement("ul");
    donors.forEach(donor => {
        const listItem = document.createElement("li");
        listItem.textContent = `${donor.name} - ${donor.bloodGroup} - ${donor.location}`;
        list.appendChild(listItem);
    });
    donorsListDiv.innerHTML = '';
    donorsListDiv.appendChild(list);
}

// Login Popup functionality
const loginButton = document.querySelector('.btnlogin-popup');
const closeButton = document.querySelector('.icon-close');
const loginWrapper = document.querySelector('.wrapper');
const loginFormElement = document.querySelector('form');

// Show login form
loginButton.addEventListener('click', () => {
    loginWrapper.style.display = 'flex';
});

// Close login form
closeButton.addEventListener('click', () => {
    loginWrapper.style.display = 'none';
});

// Handle login form submission
loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    if (email && password) {
        alert('Login successful!');
        loginWrapper.style.display = 'none';
    } else {
        alert('Please fill in both fields.');
    }
});
