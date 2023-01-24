import s from "./Input.module.css";


export function Input({ searchHero }) {
  return (
    <>
      <div>
        <p className={ s.name }>Name</p>
        <input onChange={ searchHero} className={s.input} type="text" placeholder="Enter name"></input>
        </div>
    </>
  );
}
