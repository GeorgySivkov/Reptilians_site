document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll("h2");
  const menu = document.getElementById('head-menu');
  items.forEach((item) => {
    item.setAttribute('id', `${item.textContent.split(' ').join('')}`)
    const menuItem = document.createElement('a');
    menuItem.textContent = item.textContent;
    menuItem.className = 'head-menu-item';
    menuItem.setAttribute('rel', 'noreferrer noopener');
    menuItem.href = `#${item.textContent.split(' ').join('')}`
    menu.appendChild(menuItem)
  })
});