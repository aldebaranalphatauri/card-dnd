import React, { useState, useCallback, useEffect } from "react";
import { styled } from '@mui/material/styles'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8
export const cardHeight = 84
export const cardWidth = 60

const reorder = (list, startIndex, endIndex) => {
  //const result = Array.from(list)
  let result = list
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result
}

const CardItem = styled('div')(({ theme }) => ({
  width: cardWidth + 4,
  height: cardHeight + 4,
  border: '2px solid transparent',
  margin: grid,
  backgroundColor: 'transparent',
}))

const Card = ({ card, index }) => {
  //console.log("Card render ",  card)

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => {

        //console.log("Draggable provided", provided)
        return (
          <CardItem
            sx={{ border: card.selected ? '2px solid blue' : '2px solid transparent'}}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <img
              id={card.id}
              src={"/card-dnd/resources/" + card.front + ".svg"}
              height={cardHeight}
              width={cardWidth}
              alt={card.front}
            />
          </CardItem>
        )
      }}
    </Draggable>
  )
}

const CardList = React.memo(function CardList({ cards }) {
//const CardList = ({ cards }) => {
  return cards.map((card, index) => (
    <Card
      card={card}
      index={index}
      key={card.id}
    />
  ))
})

export const CurrentCards2 = ({ cards, setCards }) => {
  //const [state, setState] = useState(cards)
  const [toggle, setToggle] = useState(false)

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    /*
    const newCards = reorder(
      cards,
      result.source.index,
      result.destination.index,
    )
    setCards(newCards)
    */

    setCards(previous => reorder(previous, result.source.index, result.destination.index))
    setToggle(previous => !previous)
  }

  console.log("render CurrentCards", cards)
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Droppable droppableId="list" direction="horizontal">
        {(provided) => (
          <div
            style={{ display: "flex", padding: "10px", overflow: "auto" }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <CardList cards={cards} toggle={toggle} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}