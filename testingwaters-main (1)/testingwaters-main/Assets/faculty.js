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

function hideAllText() {
    document.querySelectorAll('.text').forEach(function(el) {
        el.classList.remove('visible');
    });
}

function showText1() {
    hideAllText();
    document.querySelector('.text1').classList.add('visible');
    document.querySelector('.line1').style.height = '100px'; // Expand first line
    document.querySelector('.line2').style.height = '40px'; // Reset other lines
    document.querySelector('.line3').style.height = '40px';
}

function showText2() {
    hideAllText();
    document.querySelector('.text2').classList.add('visible');
    document.querySelector('.line1').style.height = '40px'; // Reset first line
    document.querySelector('.line2').style.height = '100px'; // Expand second line
    document.querySelector('.line3').style.height = '40px';
}

function showText3() {
    hideAllText();
    document.querySelector('.text3').classList.add('visible');
    document.querySelector('.line1').style.height = '40px'; // Reset first line
    document.querySelector('.line2').style.height = '40px'; // Reset second line
    document.querySelector('.line3').style.height = '100px'; // Expand third line
}
