function toggleMenu() {
  document.querySelectorAll('.menu-bar').forEach((element) => element.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('active');
  }));
}

toggleMenu();