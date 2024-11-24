function navegarUrlAtividade(){
    window.location.href = 'Atividades.html'
}

function navegarUrlQuemSomos(){
    window.location.href = 'QuemSomos.html'
}

function navegarUrlContribua(){
    window.location.href = 'Contribua.html'
}

function ChatWhatsApp(){
    window.location.href = 'https://wa.me/558189543669'
}

function ChatInstagram(){
    window.location.href = 'https://www.instagram.com/institutoalerta/'
}

// Função do header celular
const navMenu = document.querySelector('.navigation-links');

const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

// Seleciona o botão e o corpo
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeButton.textContent = savedTheme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Alterna entre claro e escuro
themeButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    const newTheme = isDarkMode ? 'dark-mode' : '';
    themeButton.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);
});