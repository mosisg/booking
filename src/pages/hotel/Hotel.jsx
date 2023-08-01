import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div class="hotelWrapper">
          <button class="bookNow">Réserver maintenant !</button>
          <h1 class="hotelTitle">Appartements Tower Street</h1>
          <div class="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>125 Elton St, New York</span>
          </div>
          <span class="hotelDistance">
            Emplacement exceptionnel - à 500m du centre
          </span>
          <span class="hotelPriceHighlight">
            Réservez un séjour de plus de 114 $ dans cette propriété et obtenez
            un taxi aéroport gratuit
          </span>
          <div class="hotelImages">
            {photos.map((photo, i) => (
              <div class="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  class="hotelImg"
                />
              </div>
            ))}
          </div>
          <div class="hotelDetails">
            <div class="hotelDetailsTexts">
              <h1 class="hotelTitle">Séjournez au cœur de la ville</h1>
              <p class="hotelDesc">
                Situé à 5 minutes à pied de la porte Saint-Florian à Cracovie,
                les Appartements Tower Street proposent des hébergements avec
                climatisation et connexion Wi-Fi gratuite. Les unités disposent
                de parquet et d'une kitchenette entièrement équipée avec
                micro-ondes, télévision à écran plat et salle de bains privative
                avec douche et sèche-cheveux. Un réfrigérateur est également
                disponible, ainsi qu'une bouilloire électrique et une machine à
                café. Les principaux points d'intérêt à proximité de
                l'appartement comprennent la Halle aux draps, la place du marché
                principal et la tour de l'hôtel de ville. L'aéroport le plus
                proche est l'aéroport international Jean-Paul II de
                Cracovie-Balice, à 16,1 km des Appartements Tower Street, et
                l'établissement propose un service de navette aéroport payant.
              </p>
            </div>
            <div class="hotelDetailsPrice">
              <h1>Parfait pour un séjour de 9 nuits !</h1>
              <span>
                Situé au cœur de Cracovie, cette propriété bénéficie d'un
                excellent score de localisation de 9,8 !
              </span>
              <h2>
                <b>945 $</b> (9 nuits)
              </h2>
              <button>Réserver maintenant !</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
