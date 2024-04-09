import React from 'react';
import './App.css';


function App() {


const [data_start, setState] =React.useState("");

React.useEffect(() => {

  fetchingData();
}, [])

console.log(data_start)



function fetchingData () {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(response => setState(response))
   
    .catch(err => console.error(err));
}




return (
    <main id="quote-box">
      <h2>Random Quote Machine</h2>
      <div className='quote_container'>
        <p id="text">{data_start.content}</p>
        <p id="author">{data_start.author}</p>
      </div>
      <div className='button_holders'>
      <button id="new-quote" onClick={fetchingData}>Generate new quote!</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Twitter</a>
      </div>
      

      
    </main>
  );
}

export default App;
