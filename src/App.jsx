import { useContext, createContext } from 'react'
import { useState } from 'react';
import './App.css'

const Taskcontext = createContext(null);

const Task = () => {
  const { Cart } = useContext(Taskcontext);

  const [total,setTotal] = useState({qty:1,price:999});

  console.log(Cart)

  return (
    <>
      {Cart.map((pd) => {
        return (
          <div key={pd.id} className='container'>
            <div className='header'>
              <img src="https://images-cdn.ubuy.co.in/634e40218433e81d083d1061-apple-iphone-x-256gb-space-gray.jpg" style={{ width: 220, height: 300 }} />
              <div style={{ width: 500 }}>
                <h1><b>i phone X</b></h1>
                <p>SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</p>
              </div>
              <div style={{ marginLeft: 500, marginTop: 20 }}>
                <select style={{fontSize:20}}
                value={total?.qty}
                 onChange={(e) => {
                  const { value } = e.target;
                  setTotal( {qty:value,price:pd.price * value})

                }}>
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                  <option value={"5"}>5</option>
                </select><span className='price'><b>$999</b></span><br></br>
                <button onClick={()=> {setTotal({qty:"1",price:999})}}className='btn'>Remove</button>
              </div>
            </div><hr></hr>

            <div className='body'>
              <div style={{ display: "flex", justifyContent: "space-between", margin: 30 }}>
                <p>SUB TOTAL:</p>
                <h2>${total.price}</h2>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", margin: 30 }}>
                <p>SHIPPING:</p>
                <h3><b>FREE</b></h3>
              </div>
            </div><hr></hr>

            <div className='footer'>
              <div style={{ display: "flex", justifyContent: "space-between", margin: 30 }}>
                <p><b>TOTAL:</b></p>
                <h2>${total.price}</h2>
              </div>
            </div>

          </div>
        );
      })}
    </>
  );

};


const App = () => {

  const [Cart, setCart] = useState([{ id: "i-phone-x", quantity: 1, price: 999.0 }]);

  const handleQty = (id, newQty) => {
    const obj = Cart.find((pd) => pd.id === id);

    obj.quantity = newQty;

    const objIndex = Cart.findIndex((pd) => pd.id === id);

    const temp = [...Cart];
    temp[objIndex] = obj;

    setCart(temp);
  };


  return (
    <>
      <Taskcontext.Provider value={{ Cart, handleQty }}>
        <Task />
      </Taskcontext.Provider>
    </>
  )
}

export default App