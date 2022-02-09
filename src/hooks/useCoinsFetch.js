import { useState, useEffect } from 'react';

// API
import { API_URL } from '../config';

export const useCoinsFetch = (sort) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [coins, setCoins] = useState([]);

    // Get data coins
    const fetchData = async () => {
        setIsLoading(true)
        const res = await ( await fetch(API_URL) ).json() ;  
        try{
        setIsLoading(false) 
            setCoins(res)
        }catch (err){
            setError(err)
        }
    }

    useEffect(() => {
     fetchData()
    }, []);

    return { coins, isLoading, error, fetchData };
}