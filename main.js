document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const yOffset = -80; // kalau ada navbar fixed bisa atur offset
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    });
  });

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
const links = navbar.querySelectorAll('.teks');
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

const counters = document.querySelectorAll('.counter');
const speed = 200; // semakin kecil semakin cepat
  
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/\D/g, ''); // hapus simbol
    const inc = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + inc).toLocaleString("id-ID");
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString("id-ID");
    }
  };
  updateCount();
});


  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navlinksMobile = document.querySelectorAll(".nav-mobile")

  // Daftar section kecil yg dianggap bagian dari tentang-kami
  const miniSections = ["tentang-kami-1", "tentang-kami-2", "tentang-kami-3", "tentang-kami-4", "tentang-kami-5", "tentang-kami-6"];

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - 100; // toleransi navbar tinggi
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

      // 👉 jika current = "mini", paksa jadi "home"
  if (current === "home-2") {
    current = "home";
  }

      // 👉 jika current ada di daftar miniSections, paksa current = "home"
  if (miniSections.includes(current)) {
    current = "tentang-kami";
  }

    navLinks.forEach(link => {
      
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.remove("hover:text-gray-500");
        link.classList.add("border-b-[10px]", "border-black");
        // link.classList.add("opacity-100");
        // link.classList.remove("opacity-0");
      } else {
        link.classList.remove("border-b-[10px]", "border-black");
        link.classList.add("hover:text-gray-500");
        // link.classList.add("opacity-0");
        // link.classList.remove("opacity-100");
      }
    });

    navlinksMobile.forEach(ling => {

      if (ling.getAttribute("href") === `#${current}`) {
        ling.classList.add("bg-yellow-400")
        ling.classList.add("text-white")
      } else {
        ling.classList.remove("bg-yellow-400")
        ling.classList.remove("text-white")
      }
    })
  });
