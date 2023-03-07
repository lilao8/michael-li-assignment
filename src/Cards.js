import { cardData } from './assets/cardData';
import { useState } from "react";

const Cards = () => {
  const [cardTag, setCardTag] = useState(cardData[0]);

  return (
    <div className="container">

      {/*Three grids*/}
      <div className="grid-container">
        {cardData.map((singleData) => (
            <button key={singleData.amount} className={cardTag === singleData? "grid-item-active": "grid-item"} onClick={()=> setCardTag(singleData)}>
              <p>Buy {singleData.amount} miles</p>
              <p className="bold">${singleData.cost.toFixed(2)}</p>
            </button>
          )
        )}
      </div>

      {/*payment details*/}
      <div className="payment-container">
        <div className="left-container">
          <h2>Payment details</h2>
          <p>We accept all major credit cards. Please ensure that you enter your details exactly as they apper on your credit card statement. All fields are required unless is indicated.</p>
          <form>
            <label htmlFor="name">Cardholder name</label>
            <input type="text" name="name" required/>
            <label htmlFor="number">Card number</label>
            <input type="text" name="number" required/>
            <label htmlFor="date">Expiration date</label>
            <input type="text" name="date" placeholder="MMYY" className="date-input" required/>
            <label htmlFor="cvv">CVV</label>
            <input type="password" pattern="\d{3}" className="cvv-input" maxLength="3" />
          </form>
        </div>
        <div className="right-container">
          <div className="right-box">
            <h2>Order summary</h2>
            <div className="top-bottom-line">
              <div className="space-between">
                <p>Total Miles</p>
                <p>{cardTag.amount}</p>
              </div>
              <div className="space-between">
                <p>GST/ HST</p>
                <p>${(cardTag.cost * 0.1).toFixed(2)}</p>
              </div>
          </div>
            <div className="space-between" >
              <p>Total cost</p>
              <p className="bold">${(cardTag.cost * 1.1).toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards;
