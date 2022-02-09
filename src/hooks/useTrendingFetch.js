import { useState, useEffect } from 'react';

// API
import { API_URL } from '../config';

export const useTrendingFetch = (sort) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sortCoins, setSortCoins] = useState([]);

    const fetchSortData = async () => {
        setIsLoading(true)
        const res = await (await fetch(API_URL)).json();
        try{
          if(sort){
            let sortedCoins = res.sort(function(a, b){ 
              return b.price_change_percentage_24h - a.price_change_percentage_24h 
            })
            setSortCoins(sortedCoins)
          }else{
            let sortedCoins = res.sort(function(a, b){ 
              return a.price_change_percentage_24h - b.price_change_percentage_24h
            })
            setSortCoins(sortedCoins)
          }
          setIsLoading(false)
          return sortCoins;
        }catch (err){
            setError(err)
            console.log(error);
        }
      }

      useEffect(() => {
        fetchSortData()
      }, []);

      return { sortCoins, isLoading, error, fetchSortData };
}