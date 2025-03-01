// Icons
import { PiTelevisionSimpleBold } from "react-icons/pi";
// Components
import Searchbar from "../../components/Search/Searchbar.jsx";
import GameCard from "../../components/GameCard/GameCard.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
const Developers = () => {
  const data = [
    {
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      price: 39.99,
      stars: 4.9,
    },
    {
      title: "Elden Ring",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      price: 59.99,
      stars: 4.9,
    },
    {
      title: "God of War Ragnarök",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      price: 49.99,
      stars: 4.8,
    },
    {
      title: "Cyberpunk 2077",
      image:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
      price: 39.99,
      stars: 4.5,
    },
    {
      title: "Resident Evil 4 Remake",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      price: 59.99,
      stars: 4.7,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      price: 39.99,
      stars: 4.9,
    },
    {
      title: "Elden Ring",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      price: 59.99,
      stars: 4.9,
    },
    {
      title: "God of War Ragnarök",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      price: 49.99,
      stars: 4.8,
    },
    {
      title: "Cyberpunk 2077",
      image:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
      price: 39.99,
      stars: 4.5,
    },
    {
      title: "Resident Evil 4 Remake",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      price: 59.99,
      stars: 4.7,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      price: 39.99,
      stars: 4.9,
    },
    {
      title: "Elden Ring",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      price: 59.99,
      stars: 4.9,
    },
    {
      title: "God of War Ragnarök",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      price: 49.99,
      stars: 4.8,
    },
    {
      title: "Cyberpunk 2077",
      image:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
      price: 39.99,
      stars: 4.5,
    },
    {
      title: "Resident Evil 4 Remake",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      price: 59.99,
      stars: 4.7,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      price: 39.99,
      stars: 4.9,
    },
    {
      title: "Elden Ring",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      price: 59.99,
      stars: 4.9,
    },
    {
      title: "God of War Ragnarök",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      price: 49.99,
      stars: 4.8,
    },
    {
      title: "Cyberpunk 2077",
      image:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
      price: 39.99,
      stars: 4.5,
    },
    {
      title: "Resident Evil 4 Remake",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      price: 59.99,
      stars: 4.7,
    },
  ];
  return (
    <>
      <div className="games-container">
        <div className="game-sidebar">
          <div className="filter-section">
            <h1 className="filter-title-text"> <PiTelevisionSimpleBold/> Consolas</h1>
            <div className="filter-containers">
              <p className="filter-text">Playstation 5</p>
              <p className="filter-text">Xbox</p>
              <p className="filter-text">Pc</p>
              <p className="filter-text">Nintendo Switch</p>
            </div>
          </div>
          
        </div>
        <div className="games-content">
          <h1 className="games-title-text" id="color">
            Desarrolladoras
          </h1>
          <div className="games-nav">
            <Searchbar />
            <Dropdown />
          </div>
          <div className="game-cards-container">
            {data.map((data, index) => (
              <GameCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Developers;
