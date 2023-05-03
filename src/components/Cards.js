import React, { useState } from 'react'
import truck from '../images/icons/truck.svg'
import '../App.css'

export default function Cards() {
    return (
        <section>
            <div className='section-cards'>
                <div className="presentation-cards">
                    <h4>Service</h4>
                    <h2>Millions of People use: SoftWM</h2>
                </div>
                <div className="cards-block">
                    <div className='cards'>
                        <span class="material-symbols-outlined icons">local_shipping</span>
                        <h2>Free shipping</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                    </div>
                    <div className='cards'>
                    <span class="material-symbols-outlined icons">local_shipping</span>
                        <h2>24/7 Hour Support</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                    </div>
                    <div className='cards'>
                    <span class="material-symbols-outlined truck">local_shipping</span>
                        <h2>100% Moneyback</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}