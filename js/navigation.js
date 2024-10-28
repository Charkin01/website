// Handle the menu toggle (existing code)
document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('secondary-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';  // Hide the menu if it's visible
    } else {
        menu.style.display = 'block'; // Show the menu when the icon is clicked
    }
});

// Wait for the DOM content to load (existing code)
window.addEventListener('DOMContentLoaded', (event) => {
    const secondaryMenu = document.getElementById('secondary-menu');
    const primaryMenuContainer = document.querySelector('.primary-menu-container');
    
    function adjustSecondaryMenuPosition() {
        // Get the bounding box of the primary menu container
        const primaryMenuRect = primaryMenuContainer.getBoundingClientRect();
        
        // Align the secondary menu with the primary menu
        // Subtracting a few pixels to fine-tune alignment
        secondaryMenu.style.right = (window.innerWidth - primaryMenuRect.right - 15) + 'px';
    }

    // Adjust on load and when the window resizes
    adjustSecondaryMenuPosition();
    window.addEventListener('resize', adjustSecondaryMenuPosition);
});






// Music Icon Logic
const musicIcon = document.getElementById('music-icon');
let isPlaying = false; // Track whether music is playing
let isHoveredMusic = false; // Track whether the mouse is hovering over the music icon
const audio = new Audio('../media/music.mp3'); // Ensure the correct path to the music file

// Handle click events for playing or pausing music
musicIcon.addEventListener('click', function() {
    isPlaying = !isPlaying; // Toggle playing state
    if (isPlaying) {
        audio.play(); // Play the music
    } else {
        audio.pause(); // Pause the music
    }
    updateMusicIcon(); // Update the icon based on the new state
});

// Handle mouse hover over the music icon
musicIcon.addEventListener('mouseenter', function() {
    isHoveredMusic = true;
    updateMusicIcon(); // Update the icon on hover
});

// Handle mouse leaving the music icon
musicIcon.addEventListener('mouseleave', function() {
    isHoveredMusic = false;
    updateMusicIcon(); // Update the icon when hover is removed
});

// Update the music icon based on the state
function updateMusicIcon() {
    if (isPlaying) {
        // When music is playing
        if (isHoveredMusic) {
            // Hover state
            if (isLightMode) {
                // Light mode: white icon on hover with black background
                musicIcon.style.backgroundImage = "url('../media/music-on-icon-white.png')";
                musicIcon.style.backgroundColor = "black"; // Black background in light mode
            } else {
                // Dark mode: black icon on hover with white background
                musicIcon.style.backgroundImage = "url('../media/music-on-icon.png')";
                musicIcon.style.backgroundColor = "white"; // White background in dark mode
            }
        } else {
            // Not hovered
            if (isLightMode) {
                // Light mode: default white background
                musicIcon.style.backgroundImage = "url('../media/music-on-icon.png')";
                musicIcon.style.backgroundColor = "transparent";
            } else {
                // Dark mode: default white icon
                musicIcon.style.backgroundImage = "url('../media/music-on-icon-white.png')";
                musicIcon.style.backgroundColor = "transparent";
            }
        }
    } else {
        // When music is paused
        if (isHoveredMusic) {
            // Hover state
            if (isLightMode) {
                // Light mode: white icon on hover with black background
                musicIcon.style.backgroundImage = "url('../media/music-off-icon-white.png')";
                musicIcon.style.backgroundColor = "black";
            } else {
                // Dark mode: black icon on hover with white background
                musicIcon.style.backgroundImage = "url('../media/music-off-icon.png')";
                musicIcon.style.backgroundColor = "white";
            }
        } else {
            // Not hovered
            if (isLightMode) {
                // Light mode: default icon
                musicIcon.style.backgroundImage = "url('../media/music-off-icon.png')";
                musicIcon.style.backgroundColor = "transparent";
            } else {
                // Dark mode: default white icon
                musicIcon.style.backgroundImage = "url('../media/music-off-icon-white.png')";
                musicIcon.style.backgroundColor = "transparent";
            }
        }
    }
}






// Mode Icon Logic
const modeIcon = document.getElementById('mode-icon');
let isLightMode = true; // Tracks whether light mode is active
let isHoveredMode = false; // Track hover state for mode icon

// Update the mode icon based on the current mode and hover state
function updateModeIcon() {
    if (isLightMode) {
        if (isHoveredMode) {
            // Light mode hover: show dark-mode icon in white
            modeIcon.style.backgroundImage = "url('../media/dark-icon-white.png')";
            modeIcon.style.backgroundColor = "black";
        } else {
            // Light mode default: show dark-mode icon
            modeIcon.style.backgroundImage = "url('../media/dark-icon.png')";
            modeIcon.style.backgroundColor = "transparent";
        }
    } else {
        if (isHoveredMode) {
            // Dark mode hover: show light-mode icon in black
            modeIcon.style.backgroundImage = "url('../media/light-icon.png')";
            modeIcon.style.backgroundColor = "white"; // White background in dark mode
        } else {
            // Dark mode default: show light-mode icon
            modeIcon.style.backgroundImage = "url('../media/light-icon-white.png')";
            modeIcon.style.backgroundColor = "transparent";
        }
    }
}





// Navigation Icon Logic
const menuIcon = document.getElementById('menu-icon');
let isHoveredMenu = false; // Track hover state for menu icon

// Update the navigation (menu) icon based on the hover state
function updateMenuIcon() {
    if (isHoveredMenu) {
        // Hover state
        if (isLightMode) {
            // Light mode: white icon on hover with black background
            menuIcon.style.backgroundImage = "url('../media/navigation-icon-white.png')";
            menuIcon.style.backgroundColor = "black"; // Black background in light mode
        } else {
            // Dark mode: black icon on hover with white background
            menuIcon.style.backgroundImage = "url('../media/navigation-icon.png')";
            menuIcon.style.backgroundColor = "white"; // White background in dark mode
            menuIcon.style.border = "solid 2px black";
        }
    } else {
        // Not hovered
        if (isLightMode) {
            // Light mode: default navigation icon
            menuIcon.style.backgroundImage = "url('../media/navigation-icon.png')";
            menuIcon.style.backgroundColor = "transparent";
        } else {
            // Dark mode: default white icon
            menuIcon.style.backgroundImage = "url('../media/navigation-icon-white.png')";
            menuIcon.style.backgroundColor = "transparent";
            menuIcon.style.border = "solid 2px white";
        }
    }
}




// Function to update the CSS variables for colors based on the mode
function updateColors() {
    const root = document.documentElement; // Get the root element (HTML)
    
    if (isLightMode) {
        // Light mode colors
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--coloured-text', "url('../media/background-abstract.webp')");
    } else {
        // Dark mode colors
        root.style.setProperty('--background-color', '#161619');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--coloured-text', "url('../media/background-abstract-2.webp')");
    }
}






// Define the images for both light and dark modes using the correct paths
const logos = [
    { class: 'inapub', light: '../media/inapub.png', dark: '../media/inapub-white.png' },
    { class: 'premium', light: '../media/premium.png', dark: '../media/premium-white.png' },
    { class: 'shadow', light: '../media/shadow.png', dark: '../media/shadow-white.png' },
    { class: 'citation-icon', light: '../media/citation-icon.png', dark: '../media/citation-icon-white.png' } // Citation icon
];

// Function to update the logo images based on the current mode
function updateLogoImages() {
    logos.forEach(logo => {
        // Select all images with the specified class (handles multiple instances)
        const imgElements = document.querySelectorAll(`.${logo.class}`);
        imgElements.forEach(imgElement => {
            imgElement.src = isLightMode ? logo.light : logo.dark; // Update the src based on mode
        });
    });
}

// Handle click events to toggle between light and dark modes
modeIcon.addEventListener('click', function() {
    isLightMode = !isLightMode; // Toggle between light and dark mode
    updateColors(); // Change colors via CSS variables
    updateModeIcon(); // Update the mode icon after changing modes
    updateMusicIcon(); // Update the music icon to adapt to the new theme
    updateMenuIcon(); // Update the navigation icon to adapt to the new theme
    updateLogoImages(); // Update project logo and citation images when the mode changes
});

// Handle mouse hover over the mode icon
modeIcon.addEventListener('mouseenter', function() {
    isHoveredMode = true;
    updateModeIcon(); // Update the icon on hover
});

// Handle mouse leaving the mode icon
modeIcon.addEventListener('mouseleave', function() {
    isHoveredMode = false;
    updateModeIcon(); // Update the icon when hover is removed
});

// Handle mouse hover over the menu (navigation) icon
menuIcon.addEventListener('mouseenter', function() {
    isHoveredMenu = true;
    updateMenuIcon(); // Update the icon on hover
});

// Handle mouse leaving the menu (navigation) icon
menuIcon.addEventListener('mouseleave', function() {
    isHoveredMenu = false;
    updateMenuIcon(); // Update the icon when hover is removed
});

// Set the initial state of the icons and colors
updateModeIcon();
updateMusicIcon();
updateMenuIcon();
updateColors();
updateLogoImages();




