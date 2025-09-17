const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mencetMenu = document.querySelectorAll('.menuMobile');

    // buka menu
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });

    // tutup menu
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    });

    mencetMenu.forEach(menu => {
      menu.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
      })
    });

// untuk membuat navbar text jadi putih saat di scroll

const navbar = document.getElementById('navbar');
const links = navbar.querySelectorAll('a');
const border = navbar.querySelectorAll('.boldel');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) { // scroll > 50px
    links.forEach(link => {
      link.classList.remove('text-black');
      link.classList.add('text-white');
    });
  } else {
    links.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-black');
    });
  }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) { // scroll > 50px
    border.forEach(attribute => {
      attribute.classList.remove('border-black');
      attribute.classList.add('border-white');
    });
  } else {
    border.forEach(attribute => {
      attribute.classList.remove('border-white');
      attribute.classList.add('border-black');
    });
  }
})
