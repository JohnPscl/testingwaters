const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
function hideAllText() {
    document.querySelectorAll('.text').forEach(function(el) {
        el.classList.remove('visible');
    });
}
// Add click event listener for each vertical line
// Add click event listener for each vertical line
document.querySelectorAll('.vertical-line').forEach(function(line) {
    line.addEventListener('click', function() {
        // Toggle the 'expanded' class to change the height
        if (line.style.height === '100px') {
            line.style.height = '40px'; // Shrinks back to original size on second click
        } else {
            line.style.height = '100px'; // Expands to 100px on first click
        }
    });
});

// Function to hide all text and reset all vertical lines
function hideAllText() {
    document.querySelectorAll('.text').forEach(function(el) {
        el.classList.remove('visible'); // Hide all text
    });
    document.querySelectorAll('.vertical-line').forEach(function(line) {
        line.style.height = '40px'; // Reset all lines to default height
    });
}

function showText1() {
    hideAllText(); // Hide other texts and reset all lines
    
    const line1 = document.querySelector('.feature1 .vertical-line');
    const text1 = document.querySelector('.text1');
    
    line1.style.height = '120px'; // Expand the line for feature 1
    text1.classList.add('visible'); // Show text for feature 1
}

function showText2() {
    hideAllText(); // Hide other texts and reset all lines

    const line2 = document.querySelector('.feature2 .vertical-line');
    const text2 = document.querySelector('.text2');
    
    line2.style.height = '100px'; // Expand the line for feature 2
    text2.classList.add('visible'); // Show text for feature 2
}

function showText3() {
    hideAllText(); // Hide other texts and reset all lines

    const line3 = document.querySelector('.feature3 .vertical-line');
    const text3 = document.querySelector('.text3');
    
    line3.style.height = '120px'; // Expand the line for feature 3
    text3.classList.add('visible'); // Show text for feature 3
}
