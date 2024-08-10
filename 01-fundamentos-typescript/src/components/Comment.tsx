import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const[likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        console.log('deletar')

        onDeleteComment(content)
    }

    // Sempre que você for atualizar uma info e essa info depende do valor anterior, (dela mesmo) é legal fazer atualização usando arrow function com parâmetros!

    function handleLikeComment(){
        setLikeCount((state)=> {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/168228103?s=400&u=915463e6ae2297914a2ced899e9e214c1305edab&v=4ithub.com" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>André Emanuel</strong>
                            <time title='06 de Junho às 22:22h' dateTime="2024-05-11 22:22">Cerca de 1h atrás</time>
                        </div>

                        <div className={styles.lixeira}>
                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzhkOGQ5OSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTYsNDhIMTc2VjQwYTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0MHY4SDQwYTgsOCwwLDAsMCwwLDE2aDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlY2NGg4YTgsOCwwLDAsMCwwLTE2Wk05Niw0MGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlptOTYsMTY4SDY0VjY0SDE5MlpNMTEyLDEwNHY2NGE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDE2LDBabTQ4LDB2NjRhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxNiwwWiI+PC9wYXRoPjwvc3ZnPg=="/>
                            </button>
                        </div>
                    </header>
                    <p>{content}</p>
                </div>
           

                <footer>
                    <button onClick={handleLikeComment}>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
