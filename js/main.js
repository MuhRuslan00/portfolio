
const btnDark = document.querySelector('#dark');
// 1.проверка темы на уровне системных настроек

// проверка тем темы в системных настройках
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDark.classList.add('dark-mode--active');
  document.body.classList.add('dark');
}
// 2. проверка темн теемы в локал стораж

if (localStorage.getItem('darkMode') === 'dark') {
  btnDark.classList.add('dark-mode--active');
  document.body.classList.add('dark');

} else if (localStorage.getItem('darkMode') === 'light') {
  btnDark.classList.remove('dark-mode--active');
  document.body.classList.remove('dark');
}

// Если меняются системн настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
  const newColorScheme = e.matches ? "dark" : 'light';

  alert('Change!!!')
  if (newColorScheme ==='dark') {
    btnDark.classList.add('dark-mode--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  }else {
    btnDark.classList.remove('dark-mode--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  }
})

// включение ноч режима по кнопке
// console.log(btnDark);
btnDark.onclick = function () {
  btnDark.classList.toggle('dark-mode--active');
 const isDark = document.body.classList.toggle('dark');

 if (isDark) {
  localStorage.setItem('darkMode', 'dark')
 } else{
  localStorage.setItem('darkMode', 'light');
 }
}