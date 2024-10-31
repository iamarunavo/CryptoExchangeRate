import React from "react";
import { Typography, Card } from "antd";

export function ExchangeRateUI(props) {
  const { price, dataObj, currencySymbol } = props;
  const toCurrency = dataObj.toCurrency;
  const value = price ? Number(price) : 0;

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: toCurrency,
  });

  const formattedCurrency = currencyFormatter.format(value);

  return (
    <div className="exchange-rate-ui">
      <Card
        extra={currencySymbol}
        bordered={false}
        style={{ width: 350, backgroundColor: "#4d4add", color: '#fff' }}
        size="default"
      >
        <Typography.Paragraph style={{ color: "#fff" }}>
          {formattedCurrency}
        </Typography.Paragraph>
      </Card>
    </div>
  );
}
