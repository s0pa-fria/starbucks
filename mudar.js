// Fazer esta função 2º (Ela troca a imagem do sorvete grande)
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

// Fazer esta função 3º (Ela troca a cor do circulo)
function changeCircleColor(color){
    const circulo =document.querySelector('.circulo');
    circulo.style.background =color; 
}

// Fazer esta função 1º (Ela altera  o estado Ativado/Desativado)  
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');/*Cria uma variável e seleciona classe (.toggle)*/
    var links =document.querySelector('.links');/*Cria uma variável e seleciona classe (.links)*/
    menuToggle.classList.toggle('active')/*Troca o estado da, classe (.links) para ativo*/
    links.classList.toggle('active')/*Troca o estado da, classe (.links) para */
}