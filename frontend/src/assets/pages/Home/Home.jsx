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
      title: "The Witcher 3: Wild Hunt",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      price: 39.99,
      stars: 4.9,
    },
    {
      title: "Elden Ring",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      price: 59.99,
      stars: 4.9,
    },
    {
      title: "God of War Ragnarök",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      price: 49.99,
      stars: 4.8,
    },
    {
      title: "Cyberpunk 2077",
      image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
      price: 39.99,
      stars: 4.5,
    },
    {
      title: "Resident Evil 4 Remake",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      price: 59.99,
      stars: 4.7,
    },
      {
        title: "The Witcher 3: Wild Hunt",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
        price: 39.99,
        stars: 4.9,
      },
      {
        title: "Elden Ring",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
        price: 59.99,
        stars: 4.9,
      },
      {
        title: "God of War Ragnarök",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        price: 49.99,
        stars: 4.8,
      },
      {
        title: "Cyberpunk 2077",
        image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
        price: 39.99,
        stars: 4.5,
      },
      {
        title: "Resident Evil 4 Remake",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
        price: 59.99,
        stars: 4.7,
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
