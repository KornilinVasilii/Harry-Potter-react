import s from "./Cards.module.css";
import hero from './hero.png'

export function Cards({name,actor,gender,house,alive,wand}) {
  return (
    <div className={s.heroCard}>
      <img
        className="heroPhoto"
        src={ hero}
        alt=""
        height="192"
        width="332"
      />
      <p className={s.heroTitle}> {name} </p>
      <p className={s.aboutHero}>Actor: {actor} </p>
      <p className={s.aboutHero}>Gender: { gender } </p>
      <p className={s.aboutHero}>House: { house }</p>
      <p className={s.aboutHero}>Wand core: { wand.core } </p>
      <p className={s.aboutHero}>Alive: { alive === true ? "yes": "no"} </p>
     
    </div>
  );
}
