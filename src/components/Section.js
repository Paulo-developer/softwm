import React, {useState} from 'react'
import woman from '../images/garota-purple.jpg'
import '../App.css'

export default function Header() {
  return (
      <section>
        <div className='section-l'>
          <h3>Da coleção</h3>
          <h1>Em qualquer hora <br></br>Para qualquer lugar</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br>Enim voluptas perferendis incidunt similique unde ab minus.
          </p>
          <button><p>Comece a compra </p><span class="material-symbols-outlined">expand_more</span></button>
        </div>
        <div className='section-r'>
            <img src={woman} rel='aaaa'></img>
            <div class="a">
              <p>Produtos com 70% de desconto para você!</p>
            </div>
        </div>
      </section>
    )
}