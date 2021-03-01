import React from 'react';

const Investmentcard = ({ data }) => {
    return (
        <div className="investment-template invested-cards">
            <p className={`${data.returnOfInvestment > 0 ? 'profit':'loss'}`}>{data.name}</p>
            <p>{data.bought} {data.currency}</p>
            <p>{data.currentPrice} {data.currency}</p>
            <p>{data.returnOfInvestment}%</p>
        </div>
    )
}

export default Investmentcard;