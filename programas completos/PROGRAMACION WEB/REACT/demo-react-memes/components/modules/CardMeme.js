import {useEffect, useState} from 'react'

import styles from '../../styles/Home.module.css' 


function CardMeme({meme = {}}) {

    return (
        <a href={meme.url} className={styles.card} >
            <img src={meme.url}  />
            <h2> {meme.name}</h2>
            <p>{meme.id} </p>
        </a>)
    
}

export default CardMeme