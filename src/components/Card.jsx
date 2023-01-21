import styles from '../estilo.module.css'

export default function Card(props) {
   return (
      <div className={styles.Card}>
         <button onClick={props.onClose} className={styles.boton}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styles.imagen} src={props.image} alt="" /> 
      </div>
   );
}
