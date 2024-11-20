import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

export function Post({author, publishedAt, content}){

    const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return(
        <article className={styles.post}>
            <header className={styles.cabecalho}>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} alt="" />      

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>



                <time dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time> 
            </header>
                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p>{line.content}</p>
                        } else if (line.type === 'link'){
                            return <p><a>{line.content}</a></p>
                        }
                    })}
                </div>
            

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
        </article>
    )
}