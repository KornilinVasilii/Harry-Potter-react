import { Cards } from "../Cards/Cards";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Liked } from "../Pages/Liked/Liked";
import { Select } from "../Select/Select";
import s from "./Main.module.css";


export function Main({ searchHero,hero,setHouse,house }) {

  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <Input searchHero={searchHero} />
          <Select setHouse={setHouse} house={house} />
        </div>
        <main className={s.main}>
          {hero.map((el, i) => (
            <Cards key={i} {...el} />
          ))}
        </main>
        <Liked/>
      </Container>
    </>
  );
}
