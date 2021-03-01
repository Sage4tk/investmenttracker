import React, { useState, useEffect } from 'react';

//components
import Listcard from './Listcard';

const Watchlist = ({ showlist }) => {
    const [watchlist, setWatchlist] = useState();

    
    const getList = async () => {
        try {
          const res = await fetch('https://timothytimbol.herokuapp.com/api/watchlist');
          const data = await res.json();
          setWatchlist(data);
        } catch (err) {
          throw err;
        }
    }

    useEffect(() => {
        getList();
        setInterval(() => {
          getList();
        }, 5000)
    }, [])

    if (watchlist === undefined) {
        return (null);
    }

    if (showlist) {
      return (null);
    }
    
    return (
        <div>
          <div className="watchlist-template line">
            <p>Name</p>
            <p>Price</p>
          </div>
          {watchlist.map((data) => (
            <Listcard data={data} />
          ))}
        </div>
    )
}

export default Watchlist;