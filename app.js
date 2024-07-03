//for Hamburger lines menu
function Menu() {
    var x = document.getElementById('menu-items');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


// Smooth scrollin
document.querySelectorAll('.menu-items li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the default behavior of the link click (which is to navigate)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Scrolls to the target element smoothly
        });
    });
});

//for view project button
document.getElementById('explore').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});
