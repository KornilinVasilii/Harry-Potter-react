import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { data } from "./components/Cards/hp";
import { useState } from "react";

function App() {
  const [hero, setHero] = useState(data);
  const [house, setHouse] = useState('');

  //Поиск                           

  function searchHero(event) {
    const hero = data
      .filter((el) =>
        el.name.toLowerCase().includes(event.target.value.trim().toLowerCase()))
  
    setHero(hero);   
  }

  return (
    <>
      <Header />
      <Main
        hero={hero}
        house={house}
        searchHero={searchHero}
        setHouse={setHouse} />
    </>
  );
}

export default App;
