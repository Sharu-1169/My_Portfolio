/* =======================
   DARK MODE TOGGLE
======================= */
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

/* =======================
   HOME AVATAR UPLOAD
======================= */
const avatar = document.getElementById('avatar');
const avatarInput = document.getElementById('avatarInput');

if (avatar && avatarInput) {
  const savedAvatar = localStorage.getItem('userAvatar');
  if (savedAvatar) avatar.src = savedAvatar;

  avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      avatar.src = reader.result;
      localStorage.setItem('userAvatar', reader.result);
    };
    reader.readAsDataURL(file);
  });
}

/* =======================
   ABOUT PAGE IMAGE UPLOAD
======================= */
const aboutImg = document.getElementById('aboutImg');
const aboutImgInput = document.getElementById('aboutImgInput');

if (aboutImg && aboutImgInput) {
  const savedAboutImg = localStorage.getItem('aboutProfileImage');
  if (savedAboutImg) aboutImg.src = savedAboutImg;

  aboutImgInput.addEventListener('change', () => {
    const file = aboutImgInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      aboutImg.src = reader.result;
      localStorage.setItem('aboutProfileImage', reader.result);
    };
    reader.readAsDataURL(file);
  });
}

/* =======================
   GALLERY LIGHTBOX
======================= */
const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox?.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* =======================
   SCROLL REVEAL ANIMATION
======================= */
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

