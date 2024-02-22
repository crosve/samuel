import React from "react";

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg"
    >
      <img
        src={card.url}
        alt="cat logo"
        className="w-40 h-40 object-cover rounded-full"
      />
      <h1 className="text-xl font-bold mt-4">{card.title}</h1>
      <p className="text-center mt-2">{card.description}</p>
    </div>
  );
};

export default Card;
