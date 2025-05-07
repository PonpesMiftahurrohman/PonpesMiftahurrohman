// Navbar berubah saat scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Fade-in efek saat muncul di layar
  const faders = document.querySelectorAll('.fade');
  
  const appearOptions = {
    threshold: 0.3,
  };
  
  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('show');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  //fasilitas
  
  var swiper = new Swiper(".fasilitasSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },


      
    }
    
  });
  const gallery = document.getElementById('galleryList');
  const scrollAmount = 320;

  document.querySelector('.scroll-btn.left').onclick = () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  document.querySelector('.scroll-btn.right').onclick = () => {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

