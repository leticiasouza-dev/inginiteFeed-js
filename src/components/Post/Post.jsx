import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState(["post muito legal"]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { // manipulando datas
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateMNewComment(event){
        event.preventDefault()

        setComments([...comments, newCommentText ]) // pegando todos os comentários existentes e adicionando mais um
        setNewCommentText('')
        
    }   

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commenstWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete // menter na lista somente os comentários que são diferentes do qual eu quero deletar
        })

        setComments(commenstWithoutDeleteOne); // removendo aquele comentário 
    }

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
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link'){
                            return <p key={line.content}><a>{line.content}</a></p>
                        }
                    })}
                </div>
            

                <form onSubmit={handleCreateMNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        name='comment'
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    {comments.map(coment => {
                        return (
                            <Comment 
                                key={coment} 
                                content={coment} 
                                onDeleteComment={deleteComment}
                        />)
                    })}
                </div>
        </article>
    )
}