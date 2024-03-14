"use client";
// pages/minigame.jsx
import React, { useState } from "react";

// Helper function to create a deck of cards
const createDeck = () => {
  const suits = ["♠️", "♦️", "♣️", "♥️"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let deck = [];

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ rank, suit });
    }
  }

  return deck;
};

const getRandomCard = (excludedCards = new Set()) => {
  let card, cardKey;
  do {
    const suits = ["♠️", "♦️", "♣️", "♥️"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    card = { rank, suit };
    cardKey = `${rank}${suit}`;
  } while (excludedCards.has(cardKey));
  return card;
};

const Card = ({ card, isSelected, onSelect }) => {
  const select = () => onSelect(card);

  // Determine the card color based on its suit
  const cardColor =
    card.suit === "♥️" || card.suit === "♦️" ? "text-red-500" : "text-black";

  // Apply additional styling for selected (kept) cards
  const selectedStyles = isSelected
    ? "border-2 border-red-500 -translate-y-2.5 relative"
    : "";

  return (
    <div
      className={`relative flex flex-col justify-center items-center m-1 p-2 rounded-lg shadow-md cursor-pointer w-[75px] h-[100px] hover:translate-y-1 transition-all duration-300 bg-white ${cardColor} ${selectedStyles}`}
      onClick={select}
    >
      <div className="absolute text-[1.25rem] font-bold top-1 left-1">
        {card.rank}
      </div>
      {isSelected && (
        <span className="text-[1rem] text-red-500 font-bold absolute bottom-[-30px] px-1">
          HELD
        </span>
      )}
      <div className="text-[2rem]">{card.suit}</div>
      <div className="absolute text-[1.25rem] font-bold bottom-1 right-1">
        {card.rank}
      </div>
    </div>
  );
};

const winningConditions = [
  { name: "Jacks or Better", multiplier: 1 },
  { name: "2 Pair", multiplier: 2 },
  { name: "3 of a Kind", multiplier: 3 },
  { name: "Straight", multiplier: 4 },
  { name: "Flush", multiplier: 6 },
  { name: "Full House", multiplier: 7 },
  { name: "4 of a Kind", multiplier: 25 },
  { name: "Straight Flush", multiplier: 50 },
  { name: "Royal Flush", multiplier: 250 },
];

// Shuffling the deck
const shuffleDeck = (deck) => {
  let currentIndex = deck.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ];
  }

  return deck;
};

// Main game component
const MiniGame = () => {
  // States for the game, including currentWinCondition now correctly placed inside the component
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [selectedCards, setSelectedCards] = useState([]);
  const [bet, setBet] = useState(1);
  const [credits, setCredits] = useState(1000);
  const [currentHand, setCurrentHand] = useState([]);
  const [gamePhase, setGamePhase] = useState(1); // 1 for DRAW phase, 2 for DEAL phase
  const [currentWinCondition, setCurrentWinCondition] = useState(""); // Corrected to store a string
  const [winCount, setWinCount] = useState(0);

  // Function to handle card selection
  const handleSelectCard = (index) => {
    if (gamePhase === 2) {
      // Ensure selection is intended for phase 2
      setSelectedCards((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((i) => i !== index); // Deselect the card
        } else {
          return [...prevSelected, index]; // Select the card
        }
      });
    }
  };

  // Function to handle bet adjustments
  const handleBetChange = (change) => {
    setBet((prevBet) => {
      let newBet = prevBet + change;
      if (newBet > 50) return 50; // Ensure bet does not exceed 50
      if (newBet < 1) return 1; // Ensure bet does not drop below 1
      return newBet;
    });
  };

  // Helper functions to prepare the hand for easier evaluation
  const rankMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  const getRankValue = (card) => rankMap[card.rank];
  const sortByRank = (hand) =>
    hand.slice().sort((a, b) => getRankValue(a) - getRankValue(b));

  // Utility to count occurrences of each rank in the hand
  const countRanks = (hand) =>
    hand.reduce((acc, card) => {
      acc[card.rank] = (acc[card.rank] || 0) + 1;
      return acc;
    }, {});

  // Hand evaluation functions
  const isFlush = (hand) => new Set(hand.map((card) => card.suit)).size === 1;

  const isStraight = (sortedHand) => {
    for (let i = 1; i < sortedHand.length; i++) {
      if (getRankValue(sortedHand[i]) - getRankValue(sortedHand[i - 1]) !== 1) {
        return false;
      }
    }
    return true;
  };

  const isRoyalFlush = (sortedHand) =>
    isStraight(sortedHand) &&
    isFlush(sortedHand) &&
    sortedHand[0].rank === "10";

  const isStraightFlush = (sortedHand) =>
    isStraight(sortedHand) && isFlush(sortedHand) && !isRoyalFlush(sortedHand);

  const evaluateHand = (hand) => {
    const sortedHand = sortByRank(hand);
    const rankCounts = countRanks(hand);
    const ranks = Object.values(rankCounts);

    if (isRoyalFlush(sortedHand)) return "Royal Flush";
    if (isStraightFlush(sortedHand)) return "Straight Flush";
    if (ranks.includes(4)) return "4 of a Kind";
    if (ranks.includes(3) && ranks.includes(2)) return "Full House";
    if (isFlush(hand)) return "Flush";
    if (isStraight(sortedHand)) return "Straight";
    if (ranks.includes(3)) return "3 of a Kind";
    if (ranks.filter((count) => count === 2).length === 2) return "2 Pair";

    // Moved the checking for "Jacks or Better" outside of a misplaced block
    const pairRank = Object.keys(rankCounts).find(
      (rank) => rankCounts[rank] === 2,
    );
    if (["J", "Q", "K", "A"].includes(pairRank)) return "Jacks or Better";

    return "No Win";
  };

  // Function to handle draw/deal action
  const handleDrawDeal = () => {
    if (gamePhase === 1) {
      // Phase 1: DRAW
      if (credits >= bet) {
        setCredits((prevCredits) => prevCredits - bet);

        let excludedCards = new Set();
        const newHand = [];
        while (newHand.length < 5) {
          const card = getRandomCard(excludedCards);
          newHand.push(card);
          excludedCards.add(`${card.rank}${card.suit}`);
        }
        setCurrentHand(newHand);

        // Evaluate hand after drawing to potentially highlight a winning condition
        const result = evaluateHand(newHand);
        setCurrentWinCondition(result);

        setGamePhase(2);
      } else {
        alert("Not enough credits to bet.");
      }
    } else {
      // Phase 2: DEAL
      let excludedCardsSet = new Set(
        currentHand.map((card) => `${card.rank}${card.suit}`),
      );
      let newHand = currentHand.map((card, index) => {
        // Keep the card if its index is in selectedCards
        if (selectedCards.includes(index)) {
          return card;
        } else {
          // Draw a new card, ensuring it's unique within the context of this hand
          let newCard;
          do {
            newCard = getRandomCard();
          } while (excludedCardsSet.has(`${newCard.rank}${newCard.suit}`));

          excludedCardsSet.add(`${newCard.rank}${newCard.suit}`);
          return newCard;
        }
      });

      setCurrentHand(newHand);
      // Consider if you want to clear selected cards after dealing
      setSelectedCards([]);

      // Re-evaluate hand, update win condition, and calculate winnings
      const result = evaluateHand(newHand);
      setCurrentWinCondition(result);

      const winDetail = winningConditions.find(
        (condition) => condition.name === result,
      );
      const winnings = winDetail ? bet * winDetail.multiplier : 0;
      setCredits((prevCredits) => prevCredits + winnings);
      if (winnings > 0) {
        setWinCount((prevWinCount) => prevWinCount + 1);
      }

      setGamePhase(1);
    }
  };

  return (
    <div className="w-full h-full gap-6 flex flex-col">
      <div className="w-full h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div>MINIGAME:INONEPOKER</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 flex justify-center">
            <div className="relative flex flex-col justify-center items-center w-full max-w-[1000px]">
              {/* Logo */}
              <div className="m-auto rounded-xl bg-white shadow-[5px_5px_rgb(0,0,0,1)] border-black border-2 rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="px-4 py-2">
                  <h1 className="text-black font-bold text-[2rem] text-stroke">
                    IN<span className="text-red-500">ONE</span>POKER
                  </h1>
                </div>
              </div>
              {/* Score Table */}
              <div className="absolute left-5 m-auto text-black text-[16px] rounded-xl bg-white shadow-[5px_5px_rgb(0,0,0,1)] border-black border-2 z-10">
                <div className="grid grid-cols-1 gap-0">
                  {winningConditions.map((condition, index) => (
                    <div
                      key={index}
                      className={`flex justify-between px-4 py-2 ${
                        currentWinCondition === condition.name
                          ? "bg-black text-white border-2 border-white rounded-xl transition-all duration-500"
                          : "text-black rounded-xl border-2 border-white transition-all duration-500"
                      }`}
                    >
                      <span className="font-bold">{condition.name}</span>
                      <span className="ml-2 font-bold text-white text-stroke text-[16px] rounded-lg">
                        X {condition.multiplier}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-black m-2 h-[30px]">
                {gamePhase === 1 ? (
                  <h2 className="text-[1.25rem] text-white text-stroke">
                    {currentWinCondition}
                  </h2>
                ) : (
                  <>
                    <h2 className="text-[1.25rem]">CLICK ON CARDS TO HOLD</h2>
                  </>
                )}
              </div>
              <div className="flex mb-2 items-center justify-center h-[150px]">
                {currentHand.map((card, index) => (
                  <Card
                    key={index}
                    card={card}
                    isSelected={selectedCards.includes(index)}
                    onSelect={() => handleSelectCard(index)}
                  />
                ))}
              </div>
              {/* Draw/Deal Button */}
              <div className="w-full">
                <div class="w-full h-[200px] bg-slate-500 flex rounded-t-[100%] justify-center relative bg-bottom transition-all duration-500">
                  <div class="w-[150px] h-[105px] absolute bottom-[55px] m-auto border-black border-[1.5px] bg-[#393939] rounded-[100%] z-[3] flex shadow-[0px_7.5px_#113870,0px_10px_25px_rgba(0,0,0,0.7)] rotate-x-25 transition-all duration-500"></div>
                  <button
                    className="m-0 font-bold text-[1.75rem] border-2 border-black rounded-[100%] w-[130px] h-[85px] p-[1.5rem] shadow-[0px_7.5px_#480101,0px_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0px_0px_black,0px_10px_25px_rgba(144,4,4,0.7)] transition-all duration-500 leading-[2rem] mt-[35px] text-white z-10 bg-[#900404] hover:bg-[#ab0707] rotate-x-25 hover:translate-y-[7.5px] text-double-stroke"
                    onClick={handleDrawDeal}
                  >
                    {gamePhase === 1 ? "DRAW" : "DEAL"}
                  </button>
                </div>
              </div>
              {/* Game Controls */}
              <div className="flex flex-row gap-2 align-center items-center my-5">
                {/* Conditionally render bet decrement buttons only in phase 1 */}
                {gamePhase === 1 &&
                  [-10, -5, -1].map((change) => (
                    <button
                      className="bg-black font-bold text-white w-10 h-10 rounded-full jelly-btn"
                      key={change}
                      onClick={() => handleBetChange(change)}
                      disabled={bet + change < 1}
                      style={{ opacity: bet + change < 1 ? 0.5 : 1 }}
                    >
                      {change}
                    </button>
                  ))}
                {/* Always show the bet amount */}
                <div className="flex flex-col items-center font-bold text-black mx-2 border-2 border-black bg-white px-5 rounded-xl shadow-[5px_5px_rgb(0,0,0,1)]">
                  <span className="translate-y-3">Bet</span>
                  <span className="text-[2rem]">{bet}</span>
                </div>
                {/* Conditionally render bet increment buttons only in phase 1 */}
                {gamePhase === 1 &&
                  [1, 5, 10].map((change) => (
                    <button
                      className="bg-black font-bold text-white w-10 h-10 rounded-full jelly-btn"
                      key={change}
                      onClick={() => handleBetChange(change)}
                      disabled={bet + change > 50}
                      style={{ opacity: bet + change > 50 ? 0.5 : 1 }}
                    >
                      +{change}
                    </button>
                  ))}
              </div>
              <div className="absolute right-5 m-auto text-black flex flex-col items-center justify-center w-[200px] z-10">
                <div className="m-auto rounded-xl bg-white shadow-[5px_5px_rgb(0,0,0,1)] border-black border-2 text-center w-[200px] p-2 mb-4">
                  <h2 className="text-[1.5rem] font-bold">
                    Credits: <u>{credits}</u>
                  </h2>
                  <h2 className="text-[1rem] font-normal">Wins: {winCount}</h2>
                </div>
                <div className="m-auto rounded-xl bg-white shadow-[5px_5px_rgb(0,0,0,1)] border-black border-2 text-center w-[200px] p-2">
                  <h2 className="font-bold text-xl">How to Play</h2>
                  <p className="text-[12px]">
                    Hit <span className="m-1 font-bold">DRAW</span> for your
                    cards, click any to
                    <span className="m-1 font-bold">HOLD</span>, then
                    <span className="m-1 font-bold">DEAL</span>
                    to swap the rest. Match the win conditions to score!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
