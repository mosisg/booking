import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Appartements Tower Street</h1>
      <span className="siDistance">À 500 m du centre</span>
      <span className="siTaxiOp">Taxi gratuit vers l'aéroport</span>
      <span className="siSubtitle">
        Studio climatisé
      </span>
      <span className="siFeatures">
        Studio entier • 1 salle de bain • 21m² • 1 grand lit
      </span>
      <span className="siCancelOp">Annulation gratuite</span>
      <span className="siCancelOpSubtitle">
        Vous pouvez annuler ultérieurement, profitez de ce prix avantageux dès aujourd'hui !
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">112$</span>
        <span className="siTaxOp">Taxes et frais inclus</span>
        <button className="siCheckButton">Voir la disponibilité</button>
      </div>
    </div>
  </div>
  
  );
};

export default SearchItem;
