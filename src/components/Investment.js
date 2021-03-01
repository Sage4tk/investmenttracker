import React, { useState, useEffect } from 'react';

//components
import Investmentcard from './Investmentcard'

const Investments = ({ showlist }) => {

    const [investments, setInvestments] = useState();

    const getInvestments = async () => {
        try {
        const res = await fetch('https://timothytimbol.herokuapp.com/api/investments');
        const data = await res.json();
        setInvestments(data);
        } catch (err) {
        throw err;
        }
    }

    useEffect(() => {
        getInvestments();
        setInterval(() => {
        getInvestments();
        }, 5000);
    }, [])

    if (investments === undefined) {
        return (
        <div>
            <div className="investment-template line">
                <p>Name</p>
                <p>Price Bought</p>
                <p>Current Price</p>
                <p>Profit/Loss</p>
            </div>
            <p className="loading-text">Loading...</p>
        </div>
        )
    }
    
    if (showlist === false) {
        return (null);
    }

    return (
        <div>
            <div className="investment-template line">
                <p>Name</p>
                <p>Price Bought</p>
                <p>Current Price</p>
                <p>Profit / Loss</p>
            </div>
        {investments.map((data) => (
          <Investmentcard data={data} />
        ))} 
      </div>
    )
}

export default Investments