
//quotes and colors items
const quoteList = [
    {
        id:1,
        author: "Kurt Vonnegut",
        quote: "Happines is an uphill battle. Wear the good shoes.",
    },
    {
        id:2,
        author: "Don Kardong",
        quote: "Without ice cream, there would be chaos and darkness.",
    },
    {
        id:3,
        author: "Elvis Presley",
        quote: "When things go wrong, don't go with them.",
    },
    {
        id:4,
        author: "Jackson Brown Jr",
        quote: "Think big thoughts but relish small pleasures.",
    },
];

const colorList = ["red","blue","yellow","cyan","magenta","green","black","white"];


//item selectors
const quoteBox = document.getElementById('quote-box');


const authorName = document.getElementById('author')
const quoteText = document.getElementById('text')

const getQuote = document.querySelector('.new-quote');

//set current item

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    setList(currentItem);
});

function setList(listItem){
    const item = quoteList[listItem];
    authorName.textContent = item.author;
    quoteText.textContent = item.quote;
};

function setColor(){
    return Math.floor(Math.random() * colorList.length);

}

getQuote.addEventListener("click", function(currentItem){
    const colorPicker = colorList[setColor()];
    const containerColor = colorList[setColor()-1];

    document.body.style.backgroundColor = colorPicker;
    quoteBox.style.backgroundColor = containerColor;
    authorName.style.color = colorPicker;


    currentItem = Math.floor(Math.random() * quoteList.length);
    setList(currentItem);
    
});
