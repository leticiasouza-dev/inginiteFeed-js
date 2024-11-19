import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/119368474?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Letícia Souza</strong>
                            <time dateTime="2024-11-19">Publicado há 1h</time> 
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom letícia Parabéns</p>
                </div>

                <footer>

                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}