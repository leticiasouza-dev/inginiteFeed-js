import styles from './Avatar.module.css'

export function Avatar({src, hasBorder = true}){ // desestruturação é o nome quando minha propriedade já vem com um valor pré definido

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} alt="" 
        />
    )
}