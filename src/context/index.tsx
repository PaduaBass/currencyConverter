import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface ContextProps {
    data: Currency[];
    getData(): Promise<void>;
}

interface Currency {
    ask: string;
    bid: string;
    code: string;
    codein: string;
    create_date: string;
    high: string;
    low: string;
    name: string;
    pctChange: string;
    timestamp: string;
    varBid: string;
}

const CurrencyContext = createContext<ContextProps>({} as ContextProps);

const CurrencyProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<Currency[]>([]);
    const getData = useCallback(async () => {
        const response = await api.get('/all');
        setData(Object.values(response.data));
        console.log(Object.values(response.data));
    }, []);
    useEffect(() => {
        async function load() {
            await getData()
        }
        load();
    }, []);
    return <CurrencyContext.Provider value={{ getData, data }}>
        {children}
    </CurrencyContext.Provider>;
}

const useCurrencyContext = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw new Error('Currency context not found');
    return context;
};

export { useCurrencyContext, CurrencyProvider, Currency };