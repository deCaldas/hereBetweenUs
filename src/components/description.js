import styles from "../app/page.module.css"

export default function Description() {
    return(
        <>
            {/* ME GUSTARÍA CREAR 4 COMPONENTES PARA: Banner, Slogan, Description y Call To Action */}
            {/* POR AHORA TODO IRA AQUÍ */}

        <div className={styles.logo}>
            {/* Me gustaría cambiar el estilo "description" por "slogan" para mayor coherencia */}
            <h2>
                DE HOMBRE A HOMBRE Y CON PALABRA DE HONOR {/* Este es el Slogan de la marca */}
            </h2>
        </div>
        <div className={styles.description}>
            <p>
                Harlan y Anselmo Whiskey: Una pareja de hermanos contemporaneos e influencers virtuales que hablan acerca de la masculinidad y mujeres atractivas
            </p>
        </div>
        </>
    )
}
