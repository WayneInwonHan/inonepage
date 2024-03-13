"use client";
// pages/minigame.jsx
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import "../../components/JellyButton.css";

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

const drawUniqueCard = (excludedCards) => {
  let card;
  let isUnique = false;
  while (!isUnique) {
    card = getRandomCard();
    const cardKey = card.rank + card.suit;
    if (!excludedCards.includes(cardKey)) {
      isUnique = true;
    }
  }
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
      className={`relative flex flex-col justify-center items-center m-1 p-2 rounded-lg shadow-md cursor-pointer w-[50px] h-[75px] bg-white ${cardColor} ${selectedStyles}`}
      onClick={select}
    >
      <div className="absolute font-bold top-1 left-1">{card.rank}</div>
      {isSelected && (
        <span className="text-[13px] text-red-500 font-bold absolute bottom-[-15px] bg-white px-1">
          HELD
        </span>
      )}
      <div className="text-3xl">{card.suit}</div>
      <div className="absolute font-bold bottom-1 right-1">{card.rank}</div>
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
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 justify-center align-center">
            <div className="flex flex-col justify-center items-center">
              {/* Score Table */}
              <div className="text-black mb-4">
                <h2 className="text-2xl font-bold mb-2">Winning Conditions</h2>
                <div className="grid grid-cols-2 gap-2">
                  {winningConditions.map((condition, index) => (
                    <div
                      key={index}
                      className={`flex justify-between p-2 ${
                        currentWinCondition === condition.name
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <span>{condition.name}</span>
                      <span>x{condition.multiplier}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Game Controls */}

              <div className="flex flex-row gap-2 align-center items-center">
                {/* Conditionally render bet decrement buttons only in phase 1 */}
                {gamePhase === 1 &&
                  [-10, -5, -1].map((change) => (
                    <button
                      className="bg-black font-bold text-white w-10 h-10 rounded-sm jelly-btn"
                      key={change}
                      onClick={() => handleBetChange(change)}
                      disabled={bet + change < 1}
                      style={{ opacity: bet + change < 1 ? 0.5 : 1 }}
                    >
                      {change}
                    </button>
                  ))}

                {/* Always show the bet amount */}
                <div className="font-bold text-black text-[3rem] mx-5">
                  <span>Bet</span>
                  <span>{bet}</span>
                </div>

                {/* Conditionally render bet increment buttons only in phase 1 */}
                {gamePhase === 1 &&
                  [1, 5, 10].map((change) => (
                    <button
                      className="bg-black font-bold text-white w-10 h-10 rounded-sm jelly-btn"
                      key={change}
                      onClick={() => handleBetChange(change)}
                      disabled={bet + change > 50}
                      style={{ opacity: bet + change > 50 ? 0.5 : 1 }}
                    >
                      +{change}
                    </button>
                  ))}
              </div>
              <div className="text-black">
                {gamePhase === 1 ? (
                  <h2>{currentWinCondition}</h2>
                ) : (
                  <>
                    <h2>CLICK ON CARDS TO HOLD</h2>
                    <h2>{currentWinCondition}</h2>
                  </>
                )}
              </div>
              <div className="flex mb-2 justify-center">
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
              <Button
                className="bg-black text-white px-6 py-2 rounded text-2xl font-bold shadow-lg jelly-btn"
                onClick={handleDrawDeal}
              >
                {gamePhase === 1 ? "DRAW" : "DEAL"}
              </Button>
              <div className="text-black mt-4">
                <h2 className="text-xl font-bold">Credits: {credits}</h2>
              </div>
              <div className="text-black font-bold">Wins: {winCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
