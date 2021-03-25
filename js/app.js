const webDevelopment = document.querySelector('.web-development');
const powerBi = document.querySelector('.power-bi');
const linkedin = document.querySelector('.fab.fa-linkedin');
const twitter = document.querySelector('.fab.fa-twitter');
const github = document.querySelector('.fab.fa-github');
const email = document.querySelector('.email');


webDevelopment.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'https://github.com/cesarionivar';
    a.target = '__blank';
    window.open(a);
    a.remove();
});

powerBi.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'https://powerbicesarionivar.netlify.app';
    a.target = '__blank';
    window.open(a);
});

github.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'https://github.com/cesarionivar';
    a.target = '__blank';
    window.open(a);
    a.remove();
});

twitter.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'https://twitter.com/cesarionivar';
    a.target = '__blank';
    window.open(a);
    a.remove();
});

linkedin.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'https://www.linkedin.com/in/cesarionivar/';
    a.target = '__blank';
    window.open(a);
    a.remove();
});

email.addEventListener('click', ()=> {
    const a =  document.createElement('a');
    a.href = 'mailto:ing.cesarionivar@gmail.com';
    a.target = '__blank';
    window.open(a);
    a.remove();
});


if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js');
}