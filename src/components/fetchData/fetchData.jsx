import axios from 'axios';

export function getExchangeRate(fromCurrency, toCurrency) {
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            from_currency: fromCurrency,
            function: 'CURRENCY_EXCHANGE_RATE',
            to_currency: toCurrency
        },
        headers: {
            'X-RapidAPI-Key': '3687c9ecfbmshdc64ae90cc808f7p13e266jsn7e2cadeeaf76', 
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    return axios.request(options)
        .then(res => res.data)
        .catch((err) => err);
}
