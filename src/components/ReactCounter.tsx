import {useState} from 'react'

import styles from './ReactCounter.module.css'

// console.log("styles...", styles)

export default function ReactCounter(){
  const [count,setCount]=useState(0)
  return (
    <section>
      <h3 style={{textAlign:'center'}}>React counter</h3>
      <div className={styles.counter}>{count}</div>
      <div style={{textAlign:'center'}}>
        <button
          className={styles['primary-btn']}
          style={{marginRight:'2rem'}}
          onClick={()=>setCount(count-1)}
        >
            Down
        </button>
        <button
          className={styles['base-btn']}
          onClick={()=>setCount(count+1)}
        >
          Up
        </button>
      </div>
    </section>
  )
}