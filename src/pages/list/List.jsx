import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div class="listContainer">
        <div class="listWrapper">
          <div class="listSearch">
            <h1 class="lsTitle">Rechercher</h1>
            <div class="lsItem">
              <label>Destination</label>
              <input placeholder="Destination" type="text" />
            </div>
            <div class="lsItem">
              <label>Date d'arrivée</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div class="lsItem">
              <label>Options</label>
              <div class="lsOptions">
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Prix min <small>par nuit</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Prix max <small>par nuit</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Adultes</span>
                  <input
                    type="number"
                    min="1"
                    class="lsOptionInput"
                    placeholder="Adultes"
                  />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Enfants</span>
                  <input
                    type="number"
                    min="0"
                    class="lsOptionInput"
                    placeholder="Enfants"
                  />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Chambres</span>
                  <input
                    type="number"
                    min="1"
                    class="lsOptionInput"
                    placeholder="Chambres"
                  />
                </div>
              </div>
            </div>
            <button>Rechercher</button>
          </div>
          <div class="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
