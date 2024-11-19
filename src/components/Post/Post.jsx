import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/119368474?v=4" alt="" />      

                    <div className={styles.authorInfo}>
                        <strong>Letícia Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="2024-11-19">Publicado há 1h</time> /*Tag para tempo */

                <div className={styles.content}>

                     <p>Fala galeraa 👋 </p>

                     <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                     <p>👉 <a href="#">jane.design/doctorcare</a> </p>

                     <p> <a href="#">#novoprojeto #nlw #rocketseat </a> </p>
                </div>
            </header>
        </article>
    )
}