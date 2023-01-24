import s from "./Select.module.css";
import { data } from "../Cards/hp";

export function Select({ setHouse, house, searchHero }) {
  function schools(arr) {
    const sch = arr.map((el) => el.house).filter((el) => el !== "");
    const sch1 = [...new Set(sch)];
    return sch1;
  }
  const school = schools(data);

  return (
    <div>
      <p className={s.school}>School</p>
      <select onChange={searchHero} className={s.select} name="" id="">
        {school.map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
