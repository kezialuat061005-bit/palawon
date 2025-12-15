document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');

    function toggleDrawer() {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    menuBtn.addEventListener('click', toggleDrawer);
    overlay.addEventListener('click', toggleDrawer);

    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleDrawer);
    });

});

