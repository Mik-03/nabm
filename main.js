var esam-log = ;
var sr-log = ;
var sf-log = ;
var prof-pic = ;

document.getElementById('esam-log').innerHTML = esam-log;
document.getElementById('sr-log').innerHTML = sr-log;
document.getElementById('sf-log').innerHTML = sf-log;
document.getElementById('prof-pic').innerHTML = prof-pic;


const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;