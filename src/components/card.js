const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  //create html markup
  const containerDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerDiv = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  //add classList
  containerDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainerDiv.classList.add('img-container');

  //add textContent
  headlineDiv.textContent = article.headline;
  img.src = article.authorPhoto;
  span.textContent = `By ${article.authorName}`;

  //append things and such
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
  containerDiv.appendChild(headlineDiv);
  containerDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  authorDiv.appendChild(span);
  imgContainerDiv.appendChild(img);

  containerDiv.addEventListener('click', e =>{
    console.log(`Author of this card is: ${headlineDiv}`);
  })

  return containerDiv


}

import axios from "axios"

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/articles`)
  .then(res =>{
    const container = document.querySelector(selector)
    const data = res.data.articles
    const names = Object.keys(data)
    names.map(e=>{
      const newData = data[e]
      newData.forEach(element => {
        container.appendChild(Card(element))
      });
    })
    
  })
}

export { Card, cardAppender}
