import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CurrencyProvider } from './src/context/';
import Home from './src/pages/Home';

export default function App() {
  return (
    <CurrencyProvider>
        <StatusBar style="auto" />
        <Home />
    </CurrencyProvider>
  );
}
