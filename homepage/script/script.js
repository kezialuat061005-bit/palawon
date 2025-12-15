// --- Destination Links Array ---
// This array holds the destination links, in the SAME ORDER as they appear in the HTML.
const upperImageDestinations = [
    "../Puerto/HTML/PuertoPrincesa.html",     // 1st Image: underground.jpg
    "../biglagon/HTML/BigLagoon.html",        // 2nd Image: biggg la.webp
    "../KAYANGALAke/HTML/KayangaLake.html",     // 3rd Image: Kayangan Lake.webp
    "../LongBeach/HTML/Longbeach.html"        // 4th Image: Long Beach in San Vicente Town.webp
];

function setupUpperImageClicks() {
    // 1. Select all images with the class 'clickable-image'
    const imageElements = document.querySelectorAll('.upper-images .clickable-image'); 
    
    // 2. Loop through every image element found
    imageElements.forEach((element, index) => {
        // 3. Check if a link exists for the current image's index
        if (upperImageDestinations[index]) {
            // 4. Attach the click event listener
            element.addEventListener('click', () => {
                // 5. Navigate to the corresponding URL
                window.location.href = upperImageDestinations[index];
            });
        }
    });
}

// Wait for the HTML document to be fully loaded before running the setup function.
document.addEventListener('DOMContentLoaded', setupUpperImageClicks);



// --- Destination Links Array ---
// The index of this array corresponds directly to the place number (index 0 is place0, index 1 is place1, etc.)
const placeDestinations = [
    "../Puerto/HTML/PuertoPrincesa.html", // 0: place0 (Puerto Princesa Underground River)
    "../biglagon/HTML/BigLagoon.html",     // 1: place1 (Big Lagoon)
    "../KAYANGALAke/HTML/KayangaLake.html", // 2: place2 (Kayangan Lake)
    "../NacpanBeach/HTML/nacpan.html",    // 3: place3 (Nacpan Beach)
    "../Turbataha/HTML/TURBATAHA.html",// 4: place4 (Tubbataha Reef)
    "../Baraccuda/HTML/Baraccuda.html",// 5: place5 (Barracuda Lake)
    "../SmallLagoon/HTML/SmallLagoon.html",// 6: place6 (Small Lagoon)
    "../PortBarton/HTML/port.html",  // 7: place7 (Port Barton Beach Village)
    "../Onok/HTML/Onok.html",        // 8: place8 (Onok Island)
    "../HondaBay/HTML/honda.html",      // 9: place9 (Honda Bay Islands)
    "../TwinLagoon/HTML/TWINLAGOON.html",  // 10: place10 (Twin Lagoon)
    "../Malcapuya/HTML/Malcapuya.html",// 11: place11 (Malcapuya Island)
    "../ShipWreck/HTML/TwinLagoon.html",    // 12: place12 (Shipwreck Diving Spots)
    "../LongBeach/HTML/Longbeach.html",    // 13: place13 (Long Beach)
    "../Puerto/HTML/PuertoPrincesa.html"   // 14: place14 (Learn More About Palawan)
];
// NOTE: Make sure these relative paths are correct for your file structure.

// --- Click Event Logic ---
function setupPlaceClickEvents() {
    // 1. Select all divs inside .place-grid whose class starts with "place" (e.g., place0, place1, etc.)
    const placeElements = document.querySelectorAll('.place-grid > div[class^="place"]'); 
    
    // 2. Loop through the NodeList of elements
    placeElements.forEach((element, index) => {
        // 3. Check if a corresponding link exists in the destinations array
        if (placeDestinations[index]) {
            // 4. Attach a click event listener
            element.addEventListener('click', () => {
                // 5. Navigate to the URL stored at the current index
                window.location.href = placeDestinations[index];
            });
        } else {
            // Optional: Log an error if an HTML element is missing a defined link
            console.error(`Missing destination link for: ${element.className}`);
        }
    });
}

// Ensure the function runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', setupPlaceClickEvents);