// frontend
var frontendCards = [{
    image: 'assets/language/html.png',
    title: 'HTML',
},
{
    image: 'assets/language/css.png',
    title: 'CSS',
},
{
    image: 'assets/language/tailwindCss.svg',
    title: 'Tailwind CSS',
},
{
    image: 'assets/language/js.png',
    title: 'Javascript',
}];

const cardData = (container, cards) => {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        const cardInnerElement = document.createElement('div');
        cardInnerElement.className = 'card-inner';

        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        imgElement.alt = card.title;
        cardInnerElement.appendChild(imgElement);

        const h1Element = document.createElement('h1');
        h1Element.textContent = card.title;
        cardInnerElement.appendChild(h1Element);


        cardElement.appendChild(cardInnerElement);
        container.appendChild(cardElement);
    }
}


const container1 = document.querySelector('.card-container-frontend');
cardData(container1, frontendCards)

// frontend
var backendCards = [{
    image: 'assets/language/node.png',
    title: 'Nodejs',
},
{
    image: 'assets/language/express.png',
    title: 'Express',
},
];


const container2 = document.querySelector('.card-container-backend');
cardData(container2, backendCards)

var databaseCards = [{
    image: 'assets/language/mysql.png',
    title: 'MySQL',
},
{
    image: 'assets/language/mongodb.png',
    title: 'MongoDB',
},]
const container4 = document.querySelector('.card-container-db');
cardData(container4, databaseCards)

var otherCards = [{
    image: 'assets/language/c.png',
    title: 'C',
},
{
    image: 'assets/language/cplusplus.png',
    title: 'C++',
},
{
    image: 'assets/language/java.png',
    title: 'Java',
},
{
    image: 'assets/language/python.png',
    title: 'python',
},]
const container3 = document.querySelector('.card-container-other');
cardData(container3, otherCards)


var projects = [
    {
        image: 'assets/projectImage/todo.png',
        title: 'Todo using react js'
    },
    {
        image: 'assets/projectImage/pg.png',
        title: 'Password Generator using react js'
    },
]

const projectContainer = document.querySelector('.container')
// console.log(projectContainer)

cardData(projectContainer, projects)