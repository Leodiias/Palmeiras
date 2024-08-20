const botao = document.querySelector('.botao1')

function abel(){
    const imagem1 = document.querySelector('.foto-fundo')
    const texto = document.querySelector('.texto1')
    const texto1 = document.querySelector('.texto2')
    imagem1.src = "assets/abel.jpg";
    texto.innerHTML = "Abel Fernando Ferreira"
    texto1.innerHTML = "No Allianz Parque, ele já é o treinador que mais comandou e mais venceu com o Palmeiras – 116 partidas, com 79 vitórias. Entre outros recordes e marcas, Abel ainda é o técnico com mais finais pelo Verdão: 13 em 18 torneios com finais contra 10 em 29 de Luiz Felipe Scolari."
    
}
botao.addEventListener("click", abel)


const nome0 = document.querySelector('.palmeiras1')
const nome1 = document.querySelector('.abel1')
const nome2 = document.querySelector('.veiga1')
const nome3 = document.querySelector('.dudu1')
const nome4 = document.querySelector('.weverton1')
const nome5 = document.querySelector('.gomez1')
const b0 = document.querySelector('.botaoprincipal')
const b1 = document.querySelector('.botao-palmeiras2')
const b2 = document.querySelector('.botao-palmeiras3')
const b3 = document.querySelector('.botao-palmeiras4')
const b4 = document.querySelector('.botao-palmeiras5')


botao.addEventListener('mouseout', () => {
    nome1.style.display = 'none';
});

botao.addEventListener('mouseover', (event) => {
    nome1.style.display = 'block';
    
});


 



b1.addEventListener('mouseover', (event) => {
     nome2.style.display = 'block';
    
});

b1.addEventListener('mouseout', () => {
    nome2.style.display = 'none';
});


b2.addEventListener('mouseover', (event) => {
    nome3.style.display = 'block';
   
});

b2.addEventListener('mouseout', () => {
   nome3.style.display = 'none';
});


b3.addEventListener('mouseover', (event) => {
    nome4.style.display = 'block';
   
});

b3.addEventListener('mouseout', () => {
   nome4.style.display = 'none';
});


b4.addEventListener('mouseover', (event) => {
    nome5.style.display = 'block';
   
});

b4.addEventListener('mouseout', () => {
   nome5.style.display = 'none';
});



b0.addEventListener('mouseover', (event) => {
    nome0.style.display = 'block';
   
});

b0.addEventListener('mouseout', () => {
   nome0.style.display = 'none';
});


const botao2 = document.querySelector('.botao2')

function veiga(){
const imagem2 = document.querySelector('.foto-fundo')
const texto2 = document.querySelector('.texto1')
const texto3 = document.querySelector('.texto2')
imagem2.src = "assets/veiga.jpg";
texto2.innerHTML = "Raphael Cavalcante Veiga"
texto3.innerHTML = "Veiga é também o maior artilheiro do Palmeiras no Paulista (20 gols, ao lado de Dudu), o segundo maior artilheiro do clube na história da Libertadores (18 gols), atrás apenas de Rony (22), e o 2º na era dos pontos corridos do Brasileiro (38, atrás de Dudu, com 53)."
}

botao2.addEventListener("click", veiga)

const botao3 = document.querySelector('.botao3')

function dudu(){
const imagem3 = document.querySelector('.foto-fundo')
const texto4 = document.querySelector('.texto1')
const texto5 = document.querySelector('.texto2')
imagem3.src = "assets/dudu (3).jpg";
texto4.innerHTML = "Eduardo Pereira Rodrigues"
texto5.innerHTML = "Dudu marcou 88 gols pelo clube alviverde, além de anotar 95 assistências até aqui pela equipe. Considerado um dos maiores da história do clube, Dudu acumula 13 taças conquistadas pelo Palmeiras. São duas Copas Libertadores, quatro Brasileirões e quatro Paulistões entre os feitos do atacante."
}
botao3.addEventListener("click", dudu)

const botao4 = document.querySelector('.botao4')

function weverton(){
    const imagem4 = document.querySelector('.foto-fundo')
    const texto6 = document.querySelector('.texto1')
    const texto7 = document.querySelector('.texto2')
    imagem4.src = "assets/weverton2.jpg";
    texto6.innerHTML = "Weverton Pereira da Silva"
    texto7.innerHTML = "Titular desde 2018, Weverton empilha marcas com a camisa alviverde desde então. Com 373 jogos, ele tem 12 títulos e é um dos atletas com mais conquistas, empatado com Gustavo Gómez, Marcos Rocha, Mayke, Dudu, Ademir da Guia e Junqueira."
    

}
botao4.addEventListener("click", weverton)

const botao5 = document.querySelector('.botao5')

function gomez(){
const imagem5 = document.querySelector('.foto-fundo')
const texto8 = document.querySelector('.texto1')
const texto9 = document.querySelector('.texto2')

imagem5.src = "assets/gomez (2).jpg";
texto8.innerHTML = "Gustavo Raúl Gómez"
texto9.innerHTML = "Modéstia à parte, Gustavo Raúl Gómez Portillo tem sido um dos expoentes da zaga palmeirense, uma das mais fortes do Brasil na atualidade. Nos primeiros 20 jogos desta temporada, a equipe comandada pelo técnico Felipão tomou apenas sete gols – média de 0,35 por confronto."
}

botao5.addEventListener("click", gomez)


const botao0 = document.querySelector('.botao0')

function palmeiras(){
const palmeiras1 = document.querySelector('.foto-fundo')
const palmeiras2 = document.querySelector('.texto1')
const palmeiras3 = document.querySelector('.texto2')
palmeiras1.src = "assets/palmeiras___light_by_panico747-d53naxf.jpg.webp";
palmeiras2.innerHTML = "S.E Palmeiras"
palmeiras3.innerHTML = "Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia. Em 1942, quando estava estabelecida como uma força do futebol paulista, a equipe foi obrigada a trocar de nome, passando a se chamar Sociedade Esportiva Palmeiras em decorrência da Segunda Guerra Mundial."



}

botao0.addEventListener("click", palmeiras)