import {useEffect, useState} from 'react'

import Header from '../components/commons/Header'
import CardMeme from '../components/modules/CardMeme'
import styles from '../styles/Home.module.css'

import { getAllMemes }  from '../clients/WsMainBackend'

export default function Home() {
  const [memes, setMemes] = useState([])

  useEffect( () => {
    getAllMemes().then(setMemes)
  }, [])

  return (
    <div className={styles.container}>
      <Header memeSelected={10} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Andres Gerardo Valarezo Correa
        </h1>
        <div className={styles.grid}>
          {
            memes.map(
              (xMeme, index) => <CardMeme 
              key={index.toString()} 
              meme={xMeme} />
            )
          }
        
        </div>
      </main>
      <footer className={styles.footer}>
          ESPE
      </footer>
    </div>
  )
}
