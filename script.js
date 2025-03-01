// script.js
document.addEventListener("DOMContentLoaded", () => {
    const donorsList = document.getElementById("donorsList");
    let donors = [];

    function updateDonorsList() {
        donorsList.innerHTML = "";
        donors.forEach((donor, index) => {
            const donorDiv = document.createElement("div");
            donorDiv.classList.add("donor");
            donorDiv.innerHTML = `<span>${donor.name} (${donor.bloodGroup}) - ${donor.location}</span> 
                                 <button onclick="removeDonor(${index})">Remove</button>`;
            donorsList.appendChild(donorDiv);
        });
    }

    window.registerDonor = function() {
        const name = document.getElementById("name").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const location = document.getElementById("location").value;
        
        if (name && bloodGroup && location) {
            donors.push({ name, bloodGroup, location });
            updateDonorsList();
            document.getElementById("name").value = "";
            document.getElementById("location").value = "";
        } else {
            alert("Please fill all fields");
        }
    };

    window.findDonors = function() {
        const searchBloodGroup = document.getElementById("searchBloodGroup").value;
        const searchLocation = document.getElementById("searchLocation").value.toLowerCase();
        
        const filteredDonors = donors.filter(donor => 
            donor.bloodGroup === searchBloodGroup && donor.location.toLowerCase().includes(searchLocation)
        );
        
        donorsList.innerHTML = "";
        filteredDonors.forEach(donor => {
            const donorDiv = document.createElement("div");
            donorDiv.classList.add("donor");
            donorDiv.innerHTML = `<span>${donor.name} (${donor.bloodGroup}) - ${donor.location}</span>`;
            donorsList.appendChild(donorDiv);
        });
    };

    window.checkBloodStock = function() {
        alert("Feature coming soon! Blood bank stock monitoring will be available in the future.");
    };

    window.sendSOSAlert = function() {
        alert("SOS Alert sent! Nearby donors will be notified.");
    };

    window.removeDonor = function(index) {
        donors.splice(index, 1);
        updateDonorsList();
    };
});
