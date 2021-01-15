import axios from "axios";

const Tabs = (['javascript', 'bootstrap', 'technology']) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  const tab1 = document.createElement('div');
  tab1.classList.add('tab');
  tab1.textContent = topics;

  // const tab2 = document.createElement('div');
  // tab2.classList.add('tab');
  // tab2.textContent = topics;

  // const tab3 = document.createElement('div');
  // tab3.classList.add('tab');
  // tab3.textContent = topics;

  topicsDiv.appendChild(tab1);
  topicsDiv.appendChild(tab2);
  topicsDiv.appendChild(tab3);

  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument. .tabs-container
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const appendTabs = document.querySelector(selector);
  axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then ((response) => {
    const appendTabs = document.querySelector(selector);
    const arrayData = response.data.topics;
    // console.log(appendTabs);
    // console.log(arrayData);
    arrayData.forEach(element =>{
      appendTabs.appendChild(Tabs(element));
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

export { Tabs, tabsAppender }
