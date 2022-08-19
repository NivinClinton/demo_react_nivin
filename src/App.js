import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [shopList, setShopList] = useState()

  const sendRequest = async () => {
    const res = await axios
      .get("https://foodpage.co.uk/v2/shop/timing/1")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setShopList(data));
  }, []);
  console.log(shopList);
  return (
    <div className="App">
      <h1 style={{ color: 'Green' }}>Hi this is a demo page</h1>
      <div className="cardDiv">
        
            <div className="card col-md-6 ">
              <div class="card-header " style={{ color: 'Red' }}>
               {shopList && shopList.data.shopName}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>Shop Timing</p>
                  <p>Monday</p>
                  <p>Opening Time</p>
                  {shopList && shopList.data.shopTiming&&shopList.data.shopTiming.monday&&shopList.data.shopTiming.monday[0].openingTime}
                  <p>Closing Time</p>
                  {shopList && shopList.data.shopTiming&&shopList.data.shopTiming.monday&&shopList.data.shopTiming.monday[0].closingTime}

                </blockquote>
              </div>
            </div>
       

      </div>
    </div>
  );
}

export default App;
