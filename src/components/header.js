const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  //create the html
  const containerDiv = document.createElement('div');
  const span = document.createElement('span'); 
  const span2 = document.createElement('span');
  const h1 = document.createElement('h1');

  //add classes
  containerDiv.classList.add('header');
  span.classList.add('date');
  span2.classList.add('temp');

  //append things
  containerDiv.appendChild(span);
  containerDiv.appendChild(h1);
  containerDiv.appendChild(span2);

  //add textContent
  span.textContent = date;
  h1.textContent = title;
  span2.textContent = temp;

  return containerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const container = document.querySelector(selector);
  container.appendChild(Header('Lambada Times', 'Date: 7/14/22', 'Temperature: 90°F'))
}

export { Header, headerAppender }
