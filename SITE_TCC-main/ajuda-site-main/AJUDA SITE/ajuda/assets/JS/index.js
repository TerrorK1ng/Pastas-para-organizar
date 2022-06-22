/* Inicio JS Header */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
/* Final JS Header */


/* Inicio JS Ajuda */
function clickAccordion(t){
  var pai = document.getElementsByClassName('titulo')[t].parentElement;
  var img = document.getElementsByClassName('icon');
  var conteudo = pai.classList.contains('sectionHide');
  var sessoes = document.getElementsByClassName('section');
  if(conteudo == true){
       
  for(var s = 0; s < sessoes.length; s++){
      sessoes[s].classList = "section sectionHide"
      img[s].style.transform = "rotate("+0+"deg)"
  }
      pai.className = " section sectionShow";
      img[t].style.transform = "rotate("+90+"deg)";
  }
  else {
      pai.className = "section sectionHide";
      img[t].style.transform = "rotate("+0+"deg)";
  }
}
/* Final JS Ajuda */