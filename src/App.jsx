import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { WinMessage } from "./components/WinMessage"
import { useEffect, useState } from "react";
import { usegameLogic } from "./hooks/useGameLogic";


const cardValues = [
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐥",
  "🐶",
  "🐱",
  "🦆",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐥",
  "🐶",
  "🐱",
  "🦆",
];

function App() {
  const{cards, score, moves, isGameComplete, initializeGame, handleCardClick} = usegameLogic(cardValues)

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      {isGameComplete && <WinMessage moves={moves}/>}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
