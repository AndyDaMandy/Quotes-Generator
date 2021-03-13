
//Very important!!!!!!!!!!!!!!!!!!!!!!!!!!
// When making quote, use small quotes then double quotes.
// Don't mess that up or else you won't get quotation marks.

//next steps:
// Work on styling this
// Then work on creating an animation for the button click
// Then work to expand the total number of quotes and famous people
// consider pulling from a database?

const quotes = {
 1: {
  name: "Shakespeare",
  quotes: ['"To be or not to be: that is the question"', '"All the world’s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts."', '"Brevity is the soul of wit."']
    },
  2: {
  name: "Martin Luther King Junior",
  quotes: ['"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."', '"Injustice anywhere is a threat to justice everywhere."', '"Our lives begin to end the day we become silent about things that matter."']
    },
  3: {
    name: "Alexander Hamilton",
    quotes: ['"Those who stand for nothing fall for everything."', '“Give all the power to the many, they will oppress the few. Give all the power to the few, they will oppress the many.”', '“The art of reading is to skip judiciously.”']
  },
  4:{
    name: "George Washington",
    quotes: ['“It is better to offer no excuse than a bad one.”', '“It is better to be alone than in bad company.”', '“My mother was the most beautiful woman I ever saw. All I am I owe to my mother. I attribute my success in life to the moral, intellectual and physical education I received from her.”']
  },
  5: {
    name: "Thomas Jefferson",
    quotes: ['"Never put off till to-morrow what you can do to-day."', '"Pride costs us more than hunger, thirst, and cold."', '"Nothing is troublesome that we do willingly."']
  },
  6: {
    name: "Neil Gaiman",
    // An escape character is used for the first quote backslash + the single quote \'
    quotes: ['“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”', '“Have you ever been in love? Horrible isn\'t it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”', '“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.”']
  },
  7: {
    name: "James Baldwin",
    quotes: ['“You think your pain and your heartbreak are unprecedented in the history of the world, but then you read. It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive.”', '“Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.”', '“You think your pain and your heartbreak are unprecedented in the history of the world, but then you read.”']
  },
  8: {
    name: "Ursula Q. Le Guin",
    quotes: ['“Love doesn\'t just sit there, like a stone, it has to be made, like bread; remade all the time, made new.”', '“People who deny the existence of dragons are often eaten by dragons. From within.”', '“It is good to have an end to journey toward; but it is the journey that matters, in the end.”']
  },
  9: {
    name: "Toni Morrison",
    quotes: ['“If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.”', '“You wanna fly, you got to give up the shit that weighs you down.”', '“Freeing yourself was one thing, claiming ownership of that freed self was another.”']
  },
  10: {
    name: "Ghandi",
    quotes: ['“Be the change that you wish to see in the world.”', '“Live as if you were to die tomorrow. Learn as if you were to live forever.”', '“An eye for an eye will only make the whole world blind.”']
  }
}

loadQuote = (qobject) => {
console.log(quotes);
document.getElementById("showQuotes").innerHTML = "";
//change the math random value from 10 to higher if you add more people
let author = Math.floor(Math.random() * 10) + 1;
// if you add mroe quotes, you need to change this math as well, from 2 to higher
let quote = Math.floor(Math.random() * 3)
 document.getElementById("showQuotes").innerHTML = quotes[author].quotes[quote];
 document.getElementById("name").innerHTML = '- ' + quotes[author].name;
};

document.getElementById("btn").addEventListener("click", loadQuote);
