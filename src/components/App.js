import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import GameOverModal from "./GameOverModal";
import { useState } from "react";
import words from "../data/words.json";

import { colors, contentWidth } from "./GlobalStyles";


const initialGameState = { started: false, over: false, win: false, start: "Start" };

const App = () => {
  const [usedLetters, setUsedLetters] = useState(["e","d"]);
 
  const [wrongGuesses, setWrongGuesses] = useState(["a","b"]);
  const [game, setGame] = useState(initialGameState);

  const handleStart = () => {
    if (game.start==="Pause") { 
      setGame({ ...game, started: true, start:"Continue" });
    } else {
    setGame({ ...game, started: true, start:"Pause" });
    }
    getNewWord()
  }

  const [word, setWord] = useState({str: "", revealed:[]})
  

  const getNewWord = ()=>{

    if (word.str===""){
      const newWord = words[Math.floor(Math.random()*words.length)]
      const revealed = newWord.split('').map(letter =>{
        return letter=""
      })
    setWord({str: newWord, revealed }) 
    console.log(newWord)
  }

}

  //console.log(word) = international  (random)
  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart} >{game.start}</Button>
        <Button>btn 2</Button>
      </Nav>
      {game.started && (
      <>
        <Container>
          <Deadman />
          <RightColumn>
            <DeadLetters wrongGuesses = {wrongGuesses} />
            <TheWord word={word} setWord={setWord}/>
          </RightColumn>
        </Container>
        <Keyboard usedLetters={usedLetters} setUsedLetters={setUsedLetters}/>
      </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
