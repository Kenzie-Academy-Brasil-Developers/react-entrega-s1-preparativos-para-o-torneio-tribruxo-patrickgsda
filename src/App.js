import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  const [characterRandomArr, setCharacterRandomArr] = useState([]);

  const Gryffindor = characterList.filter(
    (character) => character.house === "Gryffindor"
  );
  const Slytherin = characterList.filter(
    (character) => character.house === "Slytherin"
  );
  const Ravenclaw = characterList.filter(
    (character) =>
      character.house === "Ravenclaw" || character.house === "Hufflepuff"
  );

  function RandomStudent(houseArr) {
    return houseArr[Math.floor(Math.random() * houseArr.length)];
  }

  function GetStudents() {
    const Houses = [Gryffindor, Ravenclaw, Slytherin];
    let arrStudents = [];
    for (let i = 0; i < 3; i++) {
      let student = RandomStudent(Houses[i]);
      arrStudents.push(student);
    }
    setCharacterRandomArr([...arrStudents]);
  }

  return (
    <div className="App">
      <Characters characterList={characterRandomArr} />
      {characterRandomArr.length === 0 ? (
        <div className="titles">
          <h1>Torneio Tribruxo</h1>
          <h2>
            Clique no botão para <br></br>encontrar os feiticeiros!
          </h2>
          <button className="seach" onClick={() => GetStudents()}>
            Começar!
          </button>
        </div>
      ) : (
        <button className="seach" onClick={() => GetStudents()}>
          Buscar novamente...
        </button>
      )}
    </div>
  );
}

export default App;
