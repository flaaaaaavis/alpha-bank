import React, { useContext } from 'react';
import logo from '../../images/inCardLogo.png';
import masterCard from '../../images/masterCard.png';
import { StyledCard } from './Card';
import { CardContext } from '../../contexts/CardContext';
import { UserContext } from '../../contexts/UserContext';

function Card() {

    const {cardNumber, expirityDate, SSID} = useContext(CardContext);
    const { name } = useContext(UserContext)


  return (
    <StyledCard>
        <header>
            <img src={logo} alt='Alpha Bank Logo' />
            <h1>Alpha<span>Bank</span></h1>
        </header>
        <div className="flex">
            <section>
                <p>{cardNumber}</p>
                <p>{name}</p>
                <div>
                    <div>
                        <span>Exp. Date</span>
                        <p>{expirityDate}</p>
                    </div>
                    <div>
                        <span>Security Code</span>
                        <p>{SSID}</p>
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