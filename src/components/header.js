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
  const header = document.createElement('div');
  header.classList.add('header');

  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = date;

  const headerTitle = document.createElement('h1');
  headerTitle.textContent = title;

  const headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = temp;

  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  return header;
}

// console.log(Header('title', 'date', 'temp'));

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument. .header-container is the selector!
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const appendHeader = document.querySelector(selector);
  appendHeader.appendChild(Header('The Lambda Gazette', '01/15/2021', '77\u00B0'));
  //console.log(appendHeader);
}

export { Header, headerAppender }
