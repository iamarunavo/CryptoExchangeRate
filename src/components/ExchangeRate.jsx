import React, { useState, useEffect } from 'react';
import { Typography, Select, Spin } from 'antd';
import { cryptocurrencies, fiatCurrencies } from './currencies/currencies.jsx';
import { ExchangeRateUI } from './UI/ExchangeRateUI.jsx';
import { useQuery } from 'react-query';
import { getExchangeRate } from './fetchData/fetchData.jsx';

function ExchangeRate() {
  const [fromCurrency, setFromCurrency] = useState(cryptocurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);
  const [currencySymbol, setCurrencySymbol] = useState("Bitcoin");

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e);
  };

  useEffect(() => {
    const fromCurrencyLabel = cryptocurrencies.find(currency => currency.value === fromCurrency)?.label;
    setCurrencySymbol(fromCurrencyLabel);
  }, [fromCurrency]);

  const dependencies = { fromCurrency, toCurrency };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exchangeRate", dependencies],
    queryFn: () => getExchangeRate(fromCurrency, toCurrency),
    staleTime: 1000 * 60,
    retry: 1,
    retryDelay: 60000,
  });

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      overflow: 'hidden'
    }}>
      <section className="exchange-rate" style={{
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
        padding: '1rem', // Padding for inner spacing
        boxSizing: 'border-box' // Ensures padding doesn’t increase width
      }}>
        <Typography.Title style={{ color: "#4d4add", textAlign: "left" }} level={2}>Exchange Rate</Typography.Title>
        <Typography.Text style={{ display: 'block', textAlign: 'left', marginBottom: '1rem', wordWrap: 'break-word' }}>
          Get the latest exchange rate of cryptocurrencies in your favorite currency
        </Typography.Text>
        <section className="select-group" style={{ display: "flex", marginTop: "1rem", gap: "1rem", justifyContent: "center" }}>
          <Select defaultValue={cryptocurrencies[0].value} options={cryptocurrencies} onChange={handleFromCurrencyChange} />
          <Select defaultValue={fiatCurrencies[0].value} options={fiatCurrencies} onChange={handleToCurrencyChange} />
        </section>
        <section style={{ marginTop: '1rem' }}>
          {isLoading ? (
            <Spin tip="Fetching results" spinning size="large" />
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <ExchangeRateUI
              price={data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]}
              dataObj={dependencies}
              currencySymbol={currencySymbol}
            />
          )}
        </section>
      </section>
    </div>
  );
}

export default ExchangeRate;
