document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".header-nav a");
    navItems.forEach(item => {
        item.addEventListener("click", function(event) {
            console.log(`Navigating to ${event.target.textContent}`);
        });
    });
});
