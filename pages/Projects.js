import React from 'react';
import styles from '../styles/Home.module.css'

export default function Projects(){
    return(
        <div className={styles.container}>
            <h1>💥 BOOM 💥 Projects Page Routed</h1>
        <p>This should be a page about my projects programmatically populated.</p>
        <p>I guess this is a good time to start thinking about a backend? Or should I just do cards for each? Keep it simple?</p>
        
            <div className={styles.grid}>
          <a href="./Documentation" className={styles.card}>
            <h2>License Fee Calculation App </h2>
            <p>I initially did this project in Python and then realized the challenges of implementing it on a Wordpress site. Rewriting in in Javascript was quite a learning experience that started me on a fun journey of learning.</p>
          </a>

          <a href="https://www.altardsugarskull.com/" className={styles.card}>
            <h2>Lobby Display</h2>
            <p>Simple Solution to avoid walking up and down stairs</p>
            <p>After paying nearing $120/month for a service to create a lobby display I was motivated to write my own after realizing it is all just HTML, CSS, and Javascript. I saved money, provided a better bespoke product, and it can be deployed programmatically to keep me from walking down the stairs to update each time. </p>
          </a>

          <a
            href="https://hopeful-shannon-20857d.netlify.app/"
            className={styles.card}
          >
            <h2>Obligatory Pokedex App</h2>
            <p>Everyone makes this at least once right? Why ... because it is so fun!</p>
          </a>

          <a
            href="https://www.starwars.com/"
            className={styles.card}
          >
            <h2>Star Wars &rarr;</h2>
            <p>
             A long time ago in a galaxy far, far away... 
             <br></br>
             🚀 👾
            </p>
          </a>
        </div>
        </div>
    )
};