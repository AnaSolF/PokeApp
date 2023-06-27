import React from 'react'
import styles from "./loadingScreen.module.css"
const LoadingScreen = () => {
  return (
      <div className={styles.loadingScreen}>
          <img className={styles.loadingScreenIcon} src="\assets\pokedex.png" alt="pokedex" /></div>
  )
}

export default LoadingScreen