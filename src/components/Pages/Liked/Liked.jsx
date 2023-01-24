
import s from './Liked.module.css'

export function Liked() { 
  return (
    <div className={s.liked}>
      <button>← Back To All</button>
      <h1>Liked ones</h1>
      <p>Your favorite characters from the Harry Potter universe.</p>
    </div>
  );
}