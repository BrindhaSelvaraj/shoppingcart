import React, { useState } from 'react';
import "./Card.css"
function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card m-2">
      
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      <div className="card-body p-4 text-center">
      <img class="card-img-top" src={cardData.imgUrl}  />
        <h5 className="card-title"npm run dev>{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Fancy Product', price: '$40.00-$80' , imgUrl: 'https://5.imimg.com/data5/UB/AS/DH/SELLER-29696787/drbl19913-1-500x500.jpg'},
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://5.imimg.com/data5/SELLER/Default/2024/2/392024298/JF/BP/EK/304280/maxi-dress-1000x1000.jpeg"},
    { name: 'Sale Item', price: '$25', isSale: true ,imgUrl:"https://www.fablestreet.com/cdn/shop/products/Peter_20Pan_20Collar_20Pleated_20A_20Line_20Dress_20-_20Green_L2_700x.jpg?v=1615471285"},
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00',imgUrl:"https://5.imimg.com/data5/SELLER/Default/2023/12/367361942/VR/FK/QB/4537765/ladies-abstract-print-a-line-kurta-250x250.jpg" },
    { name: 'Sale Item', price: '$25', isSale: true,imgUrl:'https://5.imimg.com/data5/SELLER/Default/2022/2/WT/FR/ZD/19536859/women-printed-a-line-crepe-kurta-250x250.jpg' },
    { name: 'Fancy Product', price: '$40.00-$80' ,imgUrl:"https://5.imimg.com/data5/SELLER/Default/2023/12/368248529/TW/IM/JF/33054742/chinon-gown-collection-250x250.jpeg"},
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://5.imimg.com/data5/SELLER/Default/2023/12/368729030/MC/JF/YS/193153752/whatsapp-image-2023-12-15-at-11-23-14-250x250.jpeg"},
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00' ,imgUrl:"https://5.imimg.com/data5/SELLER/Default/2022/12/DP/FI/XF/164062178/whatsapp-image-2022-12-25-at-7-21-32-pm-250x250.jpeg"},
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;