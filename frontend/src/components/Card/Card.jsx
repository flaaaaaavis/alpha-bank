import React from 'react';
import logo from '../../images/cardLogo.png';
import masterCard from '../../images/masterCard.png'
import { StyledCard } from './Card'

function Card() {
  return (
    <StyledCard>
        <header>
            <img src={logo} alt='Alpha Bank Logo' />
            <h1>Alpha<span>Bank</span></h1>
        </header>
        <div className="flex">
            <section>
                <p>0000 0000 0000 0000</p>
                <p>FULANO A. CARVALHO</p>
                <div>
                    <div>
                        <span>Exp. Date</span>
                        <p>12/37</p>
                    </div>
                    <div>
                        <span>Security Code</span>
                        <p>567</p>
                    </div>
                </div>
            </section>
            <aside>
                <img src={masterCard} alt='Master Card' />
            </aside>
        </div>
    </StyledCard>
  );
}

export default Card;