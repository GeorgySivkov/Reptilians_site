document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll("h2");
  const menuDesktop = document.getElementById('head-menu');
  const menuMobile = document.getElementById('mobile-menu');
  items.forEach((item) => {
    item.setAttribute('id', `${item.textContent.split(' ').join('')}`)
    const menuItem = document.createElement('a');
    menuItem.textContent = item.textContent;
    menuItem.className = 'menu-item';
    menuItem.setAttribute('rel', 'noreferrer noopener');
    menuItem.href = `#${item.textContent.split(' ').join('')}`;
    menuDesktop.appendChild(menuItem);
  })
  items.forEach((item) => {
    item.setAttribute('id', `${item.textContent.split(' ').join('')}`)
    const menuItem = document.createElement('a');
    menuItem.textContent = item.textContent;
    menuItem.className = 'menu-item';
    menuItem.setAttribute('rel', 'noreferrer noopener');
    menuItem.href = `#${item.textContent.split(' ').join('')}`;
    menuMobile.appendChild(menuItem);
  })
});

const mobileMenuHandler = () => {
  const menuNODE = document.querySelectorAll('.mobile-menu')[0];
  if (menuNODE.classList.contains('visible')) {
    menuNODE.classList.remove('visible')
  } else {
    menuNODE.classList.add('visible');
  }
}