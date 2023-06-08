// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    // Jika sebelumnya tidak ada class active tambahkan, jika sebelumnya sudah ada class active hilangkan (ditambahkan/dihilangkan pada class="navbar-nav active")
    navbarNav.classList.toggle('active');
};


// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    // Selama yg diklik diluar/selain hamburger dan navbar-nav maka remove active
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});