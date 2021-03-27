export function Prices(props) {
  const usd = props.usd;
  const eur = props.eur;
  const gbp = props.gbp;

  return (
  <div>
    <p>${usd}</p>
    <p>€{eur}</p>
    <p>POUND: {gbp}</p>
  </div>
  );
}