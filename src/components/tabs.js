import axios from 'axios';

const Tabs = (topics) => {
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
  


// tried to use this method and then realized i need a loop to actually display everything, keeping this for notes though :)!

  // const mainDiv = document.createElement('div')
  // const firstTopic = document.createElement('div')
  // const secondTopic = document.createElement('div')
  // const thirdTopic = document.createElement('div')
  // mainDiv.appendChild(firstTopic);
  // mainDiv.appendChild(secondTopic);
  // mainDiv.appendChild(thirdTopic);
  // firstTopic.classList.add('tab')
  // secondTopic.classList.add('tab')
  // thirdTopic.classList.add('tab')
  // firstTopic.textContent = topics[0];
  // secondTopic.textContent = topics[1];
  // thirdTopic.textContent = topics[2];

  // return mainDiv

  const divTopics = document.createElement('div')
  topics.forEach(item => {
    const divItem = document.createElement('div')
    divItem.textContent = item;
    divItem.classList.add('tab');
    divTopics.appendChild(divItem)
  })
return divTopics
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const input = document.querySelector(selector)
  const arrTopics = axios.get('http://localhost:5000/api/topics');
    arrTopics 
      .then(res => {
        const topics = res.data.topics
        input.appendChild(Tabs(topics));
      })
  }

export { Tabs, tabsAppender }
