function toggleMenu() {
    
    let menuToggle = document.querySelector('.menu-toggle')
    let menuToggleDisplay = window.getComputedStyle(menuToggle).getPropertyValue('display');

    if (menuToggleDisplay === "none")
    {
        menuToggle.style.display = "block";
    } else {
        menuToggle.style.display = "none";
    }
}