document.addEventListener("DOMContentLoaded", function () {
    // Arabic greetings (rtl)
    const arabicGreeting = "السلام عليكم ورحمة الله وبركاته";
    const arabicWelcome = "أهلاً وسهلاً";
    const fullText = "Bangun iman yang kuat dengan tauhid dan takwa, serta hiasi diri dengan akhlak mulia. Jadikan Al-Qur'an sebagai cahaya hidup dan wariskan perjuangan Rasulullah ﷺ dengan mendidik anak-anak kita di Pondok Pesantren Miftahurrohman — tempat tumbuhnya generasi pecinta Al-Qur'an dan sunnah.";
  
    const greetingEl = document.getElementById("arabicGreeting");
    const welcomeEl = document.getElementById("arabicWelcome");
    const paragraphEl = document.getElementById("typewriter");
  
    let gIndex = 0;
    let wIndex = 0;
    let pIndex = 0;
  
    // Step 1: Type Arabic Greeting
    function typeGreeting() {
      if (gIndex < arabicGreeting.length) {
        greetingEl.textContent += arabicGreeting.charAt(gIndex);
        gIndex++;
        setTimeout(typeGreeting, 100);
      } else {
        setTimeout(typeWelcome, 300); // Delay before welcome text
      }
    }
  
    // Step 2: Type Arabic Welcome
    function typeWelcome() {
      if (wIndex < arabicWelcome.length) {
        welcomeEl.textContent += arabicWelcome.charAt(wIndex);
        wIndex++;
        setTimeout(typeWelcome, 100);
      } else {
        setTimeout(typeParagraph, 500); // Delay before paragraph
      }
    }
  
    // Step 3: Type Paragraph (LTR)
    function typeParagraph() {
      if (pIndex < fullText.length) {
        paragraphEl.textContent += fullText.charAt(pIndex);
        pIndex++;
        setTimeout(typeParagraph, 50);
      }
    }
  
    // Start typing
    typeGreeting();
  });

  const galleryList = document.getElementById("galleryList");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  btnLeft.addEventListener("click", () => {
    galleryList.scrollBy({ left: -270, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    galleryList.scrollBy({ left: 270, behavior: "smooth" });
  });
  
  const bubble = document.querySelector('.bubble-shape');
  const judulAtas = document.querySelector('.judul-atas');
  const judulBawah = document.querySelector('.judul-bawah');

  bubble.addEventListener('click', () => {
    judulAtas.textContent = 'TUJUAN KAMI';
    judulBawah.textContent = 'MENYINARI MASA DEPAN';
    bubble.style.backgroundColor = '#005f73';
  });
const photos = document.querySelectorAll('.teacher-photo');

photos.forEach(photo => {
  photo.addEventListener('mouseenter', () => {
    photo.classList.add('hovered');
  });
  photo.addEventListener('mouseleave', () => {
    photo.classList.remove('hovered');
  });
});

