document.addEventListener('DOMContentLoaded', () => {
    
    const board = document.querySelector('.container-cards');
    
    const cards = [
        {
            name: 'inter',
            path: '../assets/imgs/internacional.png'
        },
        {
            name: 'gremio',
            path: '../assets/imgs/gremio.png'
        },
        {
            name: 'corinthians',
            path: '../assets/imgs/corinthians.png'
        },
        {
            name: 'inter',
            path: '../assets/imgs/internacional.png'
        },
        {
            name: 'botafogo',
            path: '../assets/imgs/botafogo.png'
        },
        {
            name: 'cruzeiro',
            path: '../assets/imgs/cruzeiro.png'
        },
        {
            name: 'atletico',
            path: '../assets/imgs/atletico.png'
        },
        {
            name: 'gremio',
            path: '../assets/imgs/gremio.png'
        },
        {
            name: 'cruzeiro',
            path: '../assets/imgs/cruzeiro.png'
        },
        {
            name: 'palmeiras',
            path: '../assets/imgs/palmeiras.png'
        },
        {
            name: 'vasco',
            path: '../assets/imgs/vasco.png'
        },
        {
            name: 'santos',
            path: '../assets/imgs/santos.png'
        },
        {
            name: 'sao-paulo',
            path: '../assets/imgs/sao-paulo.png'
        },
        {
            name: 'botafogo',
            path: '../assets/imgs/botafogo.png'
        },
        {
            name: 'fluminense',
            path: '../assets/imgs/fluminense.png'
        },
        {
            name: 'fluminense',
            path: '../assets/imgs/fluminense.png'
        },
        {
            name: 'santos',
            path: '../assets/imgs/santos.png'
        },
        {
            name: 'atletico',
            path: '../assets/imgs/atletico.png'
        },
        {
            name: 'palmeiras',
            path: '../assets/imgs/palmeiras.png'
        },
        {
            name: 'corinthians',
            path: '../assets/imgs/corinthians.png'
        },
        {
            name: 'flamengo',
            path: '../assets/imgs/flamengo.png'
        },
        {
            name: 'sao-paulo',
            path: '../assets/imgs/sao-paulo.png'
        },
        {
            name: 'vasco',
            path: '../assets/imgs/vasco.png'
        },
        {
            name: 'flamengo',
            path: '../assets/imgs/flamengo.png'
        }
    ]
    
    let cardsSelected = [];
    let selectedCardsId = [];
    let matchedCards = [];

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            let cardGame = document.createElement('img');
            cardGame.setAttribute('src', '../assets/imgs/logo-brasileirao.png');
            cardGame.setAttribute('data-id', i);
            cardGame.className = 'back';
            board.appendChild(cardGame);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsSelected.push(cards[cardId].name);
        selectedCardsId.push(cardId);
        this.setAttribute('src', cards[cardId].path);
        if(cardsSelected.length === 2){
            setTimeout(validateCards, 500)
        }
    }
    
    function validateCards(){
        let cards = document.querySelectorAll('img');
        const firstCard = selectedCardsId[0];
        const secondCard = selectedCardsId[1];


    }
    
    createBoard();

})