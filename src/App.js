
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [freshClick, setRefreshClick] = useState(true)
  const [data, setData] = useState()
  const [previousPrice, setPreviousPrice] = useState()
  function fetchBitCointPrice() {
    axios.get('https://random-data-api.com/api/address/random_address?size=3)')
      .then(function (response) {
        // handle success
        if (!freshClick) {
          setPreviousPrice(data)
        }
        console.log(response.data);
        setData(response.data)
        setRefreshClick(false)
      })
      // handle error
      .catch(function (error) {
        console.log(error);
      })
  }
  return (
    <div className="App">
      <h1>Bitcoin</h1>

      <div className='priceList'>
        <button className={`getPriceButton ${freshClick ? 'blue ' : 'purple'} `} onClick={() => fetchBitCointPrice()}>
          {freshClick ? 'Git Bitcoin price' : 'Refresh Bitcoin price'}
        </button>
        {data && (
          <>
            <h3>Current price:</h3>
            <ol>
              {data.map((element, index) => (
                <li key={index}>{element?.postcode}</li>
              ))}
            </ol>
          </>
        )}

        {previousPrice && (
          <>
            <h3>Previous price:</h3>
            <ol>
              {previousPrice.map((element, index) => (
                <li key={index}>{element?.postcode}</li>
              ))}
            </ol>
          </>
        )}
      </div>


    </div>
  );
}

export default App;
