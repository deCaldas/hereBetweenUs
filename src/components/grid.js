import styles from "../app/page.module.css"
import Link from "next/link"

export default function Grid() {
    return(
        <div className={styles.grid}>
            <Link
            href="/" /* por ahora nos redigiremos al home */
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Autoconocimiento 
            </h2>
            <p><span>-&gt;</span> Salud mental y bienestar emocional.</p>
            </Link>

            <Link
            href="/"/* por ahora nos redigiremos al home */
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Relaciones
            </h2>
            <p><span>-&gt;</span> Familiares, Amistades, Mujeres y la Naturaleza.</p>
            </Link>

            <Link
            href="/"/* por ahora nos redigiremos al home */
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Determinación
            </h2>
            <p><span>-&gt;</span> Crecimiento personal, Artes, Oficios y Profesiones.</p>
            </Link>
 
        </div>
    )
}