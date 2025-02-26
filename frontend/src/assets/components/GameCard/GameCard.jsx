// Icons
import { FaStar } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
// Styles
import "./GameCard.css";
const GameCard = (data) => {
  return (
    <div className="game-card-container">
      <div className="game-data">
        <img src={data.image} alt={data.title} />
        <div className="game-card-details">
          <h3>{data.title}</h3>
          <div className="game-card-subdetails">
            <h3 id="color" className="big">
              ${data.price}
            </h3>
            <div className="star-rating">
              <FaStar size={12} />
              <p>{data.stars}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="shop-btn" id="buy-btn">
        <RiShoppingCartLine color="#FAFAFA" size={16} />
        <span>Comprar Ahora</span>
      </button>
    </div>
  );
};

export default GameCard;
