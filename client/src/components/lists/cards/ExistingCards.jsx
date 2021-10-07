import { useSelector } from "react-redux";

import ExistingCard from "./ExistingCard";

const ExistingCards = ({ listId }) => {
  const allCards = useSelector((state) => state.cards);
  const cards = allCards.filter((card) => card.listId === listId);
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => {
        return <ExistingCard key={card._id} {...card} />;
      })}
    </div>
  );
};

export default ExistingCards;
