// Icons
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdGift } from "react-icons/io";
// Styles
import "./Home.css";
// Components
import GameCard  from "./../../components/GameCard/GameCard.jsx";
const Home = () => {
  // Ejemplo de como seria lo ideal que llegue desde el back, por cada juego
  const data = [
    {
    title: "Call of Duty: Warzone",
    image: "src/assets/images/hero-bg.png",
    price: 59.99,
    stars: 4.5,
  },
  {
    title: "The Legend of Zelda: Breath of The Wild",
    image: "src/assets/images/hero-bg.png",
    price: 59.99,
    stars: 4.5,
  },
  {
    title: "Call of Duty: Warzone",
    image: "src/assets/images/hero-bg.png",
    price: 59.99,
    stars: 4.5,
  },
  {
    title: "The Legend of Zelda: Breath of The Wild",
    image: "src/assets/images/hero-bg.png",
    price: 59.99,
    stars: 4.5,
  },
  {
    title: "The Legend of Zelda: Breath of The Wild",
    image: "src/assets/images/hero-bg.png",
    price: 59.99,
    stars: 4.5,
  },
];

  return (
    <>
      <div className="hero-header">
        <div className="glass-top">
          <h1 className="hero-title" id="color">
            Domina el Juego
          </h1>
          <h1 className="hero-title">Compra el Futuro</h1>
          <h3 className="hero-text">
            Descubre ofertas exclusivas en los mejores títulos y únete a la
            élite gaming.
          </h3>
          <div className="hero-buttons">
            <button className="shop-btn">
              <RiShoppingCartLine color="#FAFAFA" size={16} />
              <span>Comprar Ahora</span>
            </button>
            <button className="offer-btn">
              <IoMdGift color="#FAFAFA" size={16} />
              <span>Ver Ofertas</span>
            </button>
          </div>
        </div>
      </div>
      <div className="best-games">
        <h1 className="hero-title" id="color">
          Juegos Destacados
        </h1>
        <div className="game-cards-container">
        {data.map((data, index) => (
          <GameCard key={index} {...data} />
        ))}
      </div>
      </div>
    </>
  );
};
export default Home;
