import CharCard from "../CharCard";
import "./styles.css";

function Characters({ characterList }) {
  return (
    <div className="Father-Card-Group">
      <div className="Card-Group">
        {characterList.map((stud, index) => (
          <div key={index}>
            <CharCard nome={stud.name} img={stud.image} house={stud.house} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
