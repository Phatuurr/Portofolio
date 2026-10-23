document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. LOGIKA MORPHING MENU
  // =========================================
  const morphMenu = document.getElementById("morphMenu");
  const openMenuBtn = document.getElementById("openMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  if (morphMenu && openMenuBtn && closeMenuBtn) {
    // Membesarkan kotak
    openMenuBtn.addEventListener("click", () => {
      morphMenu.classList.add("is-expanded");
    });

    // Mengecilkan kotak
    closeMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      morphMenu.classList.remove("is-expanded");
    });
  }

  // =========================================
  // 2. LOGIKA PARALLAX SCROLL LINGKARAN
  // =========================================
  const scrollCircles = document.getElementById("scrollCircles");

  if (scrollCircles) {
    window.addEventListener("scroll", () => {
      // Mengambil nilai seberapa jauh halaman sudah di-scroll ke bawah
      const scrollValue = window.scrollY;

      // Menggeser kontainer lingkaran ke kiri (minus) sebesar nilai scroll.
      // Angka 0.5 adalah kecepatan (speed multiplier). Makin kecil makin lambat gesernya.
      scrollCircles.style.transform = `translateX(${-scrollValue * 0.5}px)`;
    });
  }
});
