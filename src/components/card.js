import axios from "axios";

const Card = ({ headline, authorPhoto, authorName }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const theHeadline = document.createElement('div');
  theHeadline.classList.add('headline');
  theHeadline.textContent = headline;

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  
  const authorImg = document.createElement('img');
  authorImg.src = authorPhoto;

  const theName = document.createElement('span');
  theName.textContent = authorName;

  cardDiv.appendChild(theHeadline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(theName);

  return cardDiv;
}

// console.log(Card({headline: 'headline', authorPhoto: 'photo', authorName: 'author'}));

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument. .cards-container
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const appendCards = document.querySelector(selector);

  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((response) =>{
    // console.log(response.data.articles.javascript); 
    const javascriptArray = response.data.articles.javascript;
    javascriptArray.forEach(item =>{
      appendCards.appendChild(Card({ headline: item.headline, authorPhoto: item.authorPhoto, authorName: item.authorName }));
    })
    const bootstrapArray = response.data.articles.bootstrap;
    bootstrapArray.forEach(item =>{
      appendCards.appendChild(Card({ headline: item.headline, authorPhoto: item.authorPhoto, authorName: item.authorName }));
    })
    const jqueryArray = response.data.articles.jquery;
    jqueryArray.forEach(item =>{
      appendCards.appendChild(Card({ headline: item.headline, authorPhoto: item.authorPhoto, authorName: item.authorName }));
    })
    const nodeArray = response.data.articles.node;
    nodeArray.forEach(item =>{
      appendCards.appendChild(Card({ headline: item.headline, authorPhoto: item.authorPhoto, authorName: item.authorName }));
    })
    const technologyArray = response.data.articles.technology;
    technologyArray.forEach(item =>{
      appendCards.appendChild(Card({ headline: item.headline, authorPhoto: item.authorPhoto, authorName: item.authorName }));
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

export { Card, cardAppender }
