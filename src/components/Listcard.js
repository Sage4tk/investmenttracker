import React from 'react';

const Listcard = ({ data }) => {
    return (
        <div className="watchlist-template watchlist-card">
            <p>{data.name}</p>
            <p>{data.currentPrice} {data.currency}</p>
        </div>
    )
}

export default Listcard;