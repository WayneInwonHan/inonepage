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

const Card = ({ card, isSelected, onSelect }) => {
  const select = () => onSelect(card);

  // Determine the color of the card based on its suit
  const cardColor =
    card.suit === "♥️" || card.suit === "♦️" ? "text-red-500" : "text-black";

  // Apply additional styling to make it look more like a card
  const className = `
    ${isSelected ? "ring-4 ring-blue-300" : ""}
    ${cardColor} bg-white flex justify-center items-center
    border rounded-lg shadow-md cursor-pointer
    w-24 h-32 m-1 relative
  `;

  return (
    <div className={className} onClick={select}>
      <div className="absolute top-1 left-1">
        {card.rank}
        {card.suit}
      </div>
      <div className="text-3xl">{card.suit}</div>
      <div className="absolute bottom-1 right-1">
        {card.rank}
        {card.suit}
      </div>
    </div>
  );
};

const winningConditions = [
  { name: "Jacks or Better", multiplier: 1 },
  { name: "2 Pair", multiplier: 2 },
  { name: "3 of a Kind", multiplier: 3 },
  { name: "Straight", multiplier: 4 },
  { name: "Flush", multiplier: 5 },
  { name: "Full House", multiplier: 10 },
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

  // Function to handle card selection
  const handleSelectCard = (card) => {
    const handleSelectCard = (card) => {
      setSelectedCards((prevSelected) => {
        const cardIndex = prevSelected.findIndex(
          (selectedCard) =>
            selectedCard.rank === card.rank && selectedCard.suit === card.suit,
        );

        if (cardIndex >= 0) {
          // If the card is already selected, remove it from the array
          return prevSelected.filter((_, index) => index !== cardIndex);
        } else {
          // Otherwise, add the card to the array
          return [...prevSelected, card];
        }
      });
    };
  };

  // Function to handle bet adjustments
  const handleBetChange = (change) => {
    setBet((prevBet) => {
      const newBet = prevBet + change;
      return newBet >= 1 && newBet <= 50 ? newBet : prevBet;
    });
  };

  // Function to handle draw/deal action
  const handleDrawDeal = () => {
    if (gamePhase === 1) {
      // Randomly select 5 cards from the deck
      const newHand = deck.slice(0, 5);
      setCurrentHand(newHand);
      // Remove those 5 cards from the deck
      setDeck((prevDeck) => prevDeck.slice(5));
      setGamePhase(2);
    } else {
      // Replace selected cards with new ones from the deck
      const newCards = deck.slice(0, selectedCards.length);
      const newDeck = deck.slice(selectedCards.length);
      const newHand = currentHand.map((card) =>
        selectedCards.includes(card) ? newCards.shift() : card,
      );

      // Update state with the new hand and the remaining deck
      setCurrentHand(newHand);
      setDeck(newDeck);
      setSelectedCards([]);

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
        T: 10,
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
      const isFlush = (hand) =>
        new Set(hand.map((card) => card.suit)).size === 1;

      const isStraight = (sortedHand) => {
        for (let i = 1; i < sortedHand.length; i++) {
          if (
            getRankValue(sortedHand[i]) - getRankValue(sortedHand[i - 1]) !==
            1
          ) {
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
        isStraight(sortedHand) &&
        isFlush(sortedHand) &&
        !isRoyalFlush(sortedHand);

      const evaluateHand = (hand) => {
        const sortedHand = sortByRank(hand);
        const rankCounts = countRanks(hand);
        const ranks = Object.values(rankCounts);

        if (isRoyalFlush(sortedHand)) return "Royal Flush";
        if (isStraightFlush(sortedHand)) return "Straight Flush";
        if (ranks.includes(4)) return "4 of a Kind";
        if (ranks.includes(3) && ranks.includes(2)) return "Full House";
        if (isFlush(hand)) return "Flush";
        if (isStraight(sortedHand)) return " Straight";
        if (ranks.includes(3)) return "3 of a Kind";
        if (ranks.filter((count) => count === 2).length === 2) return "2 Pair";
        if (ranks.includes(2)) {
          const pairRank = Object.keys(rankCounts).find(
            (rank) => rankCounts[rank] === 2,
          );
          if (["J", "Q", "K", "A"].includes(pairRank)) return "Jacks or Better";
        }
        return "No Win";
      };

      const result = evaluateHand(currentHand);
      setCurrentWinCondition(result);

      setGamePhase(1);
    }
  };

  // TODO: Add more logic and components for displaying the state of the game,
  // adjusting the bet, drawing cards, dealing cards, checking for winning conditions,
  // managing the credits, and handling the game phases.

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-start pt-8">
      {/* Score Table */}
      <div className="text-white mb-4">
        <h2 className="text-2xl font-bold mb-2">Winning Conditions</h2>
        <div className="grid grid-cols-2 gap-2">
          {winningConditions.map((condition, index) => (
            <div
              key={index}
              className={`flex justify-between p-2 ${
                currentWinCondition === condition.name
                  ? "bg-white text-blue-900"
                  : "bg-blue-700"
              }`}
            >
              <span>{condition.name}</span>
              <span>x{condition.multiplier}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Game Controls */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        {[-10, -5, -1, 1, 5, 10].map((change) => (
          <button
            key={change}
            className="bg-blue-700 text-white px-3 py-1 rounded shadow"
            onClick={() => handleBetChange(change)}
            disabled={bet + change < 1 || bet + change > 50 || gamePhase !== 1}
          >
            {change >= 0 ? `+${change}` : change}
          </button>
        ))}
      </div>

      {/* Cards Display */}
      <div className="flex justify-center mb-4">
        {currentHand.map((card, index) => (
          <Card
            key={index}
            card={card}
            isSelected={selectedCards.includes(card)}
            onSelect={handleSelectCard}
          />
        ))}
      </div>
      {/* Game Info Display */}
      <div className="mt-4 text-white">
        <div className="text-white font-bold mb-4">Bet: {bet}</div>
        {/* Add more displays for winnings, total earnings, etc. */}
      </div>
      {/* Draw/Deal Button */}
      <button
        className="bg-green-600 text-white px-6 py-2 rounded text-2xl font-bold shadow-lg"
        onClick={handleDrawDeal}
      >
        {gamePhase === 1 ? "DRAW" : "DEAL"}
      </button>
    </div>
  );
};

export default MiniGame;
