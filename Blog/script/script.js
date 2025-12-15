const palawanDestinations = [
    "/Puerto/HTML/PuertoPrincesa.html",
    "/biglagon/HTML/BigLagoon.html",
    "/KAYANGALAke/HTML/KayangaLake.html",
    "/NacpanBeach/HTML/nacpan.html",
    "/Turbataha/HTML/TURBATAHA.html",
    "/Baraccuda/HTML/Baraccuda.html",
    "/SmallLagoon/HTML/SmallLagoon.html",
    "/PortBarton/HTML/port.html",
    "/Onok/HTML/Onok.html",
    "/HondaBay/HTML/honda.html",
    "/TwinLagoon/HTML/TWINLAGOON.html",
    "/Malcapuya/HTML/Malcapuya.html",
    "/ShipWreck/HTML/TwinLagoon.html",
    "/LongBeach/HTML/Longbeach.html",
    "/Puerto/HTML/PuertoPrincesa.html"
];

// --- Click Event Logic (remains the same) ---
function setupPlaceClickEvents() {
    // 1. Select all the direct children of .parent-grid that have a class starting with "place"
    const placeElements = document.querySelectorAll('.parent-grid > div[class^="place"]'); 
    
    // 2. Loop through every element found
    placeElements.forEach((element, index) => {
        if (palawanDestinations[index]) {
            element.addEventListener('click', () => {
                window.location.href = palawanDestinations[index];
            });
            element.style.cursor = 'pointer';
        }
    });
}

document.addEventListener('DOMContentLoaded', setupPlaceClickEvents);