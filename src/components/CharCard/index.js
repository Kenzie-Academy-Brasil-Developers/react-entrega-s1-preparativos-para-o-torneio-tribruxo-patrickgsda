import "./styles.css";

function CharCard({ nome, img, house }) {
  return (
    <div>
      <div className={house}>
        <h2>{nome}</h2>
        <figure>
          <img src={img} alt="Images Chars"></img>
        </figure>
        <h2>{house}</h2>
      </div>
    </div>
  );
}

export default CharCard;
