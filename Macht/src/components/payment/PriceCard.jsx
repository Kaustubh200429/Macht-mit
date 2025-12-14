import { useHistory } from "react-router-dom";

const PriceCard = ({ item }) => {
  const history = useHistory();

  return (
    <div className="price-card">
      <h3>{item.name}</h3>
      <h1>{item.price}</h1>

      {item.desc}

      <button onClick={() => history.push("/payments")}>
        GET STARTED
      </button>
    </div>
  );
};

export default PriceCard;

