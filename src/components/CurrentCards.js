import { useState, useEffect } from "react"
import { styled } from '@mui/material/styles'
import { ReactSortable } from "react-sortablejs"
import Sortable, { MultiDrag } from "sortablejs"

// mount MultiDrag plugin
Sortable.mount(new MultiDrag())

export const cardHeight = 84
export const cardWidth = 60

const StyledReactSortable = styled(ReactSortable)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(4rem, 1fr))',
  gap: '0.5rem',
  padding: '1rem',
}))

export function CurrentCards({ cards, checkedCards, setCheckedCards }) {
  const [list, setList] = useState(cards)

  const handleChange = (i) => {
    const changed = !checkedCards[i]
    const id = cards[i]

    setCheckedCards(prevState => {
      let newState = prevState
      if (changed) {
        newState[id] = true
      } else {
        delete newState[id]
      }
      return newState
    })
  }

  return (
    <StyledReactSortable
      multiDrag={false} // enables mutidrag
      list={list}
      setList={setList}
      animation={150}
    >
      {list.map((card, i) => {
        const StyledImg = styled('img')(({ theme }) => ({
          //border: checkedCards[i] ? '2px solid blue' : '2px solid transparent',
          cursor: 'move',
          border: '2px solid blue', //FIXME
        }))
        return (
          <img
            onClick={handleChange(i)}
            key={card.id}
            id={card.id}
            src={"/card-dnd/resources/" + card.front + ".svg"}
            height={cardHeight}
            width={cardWidth}
            alt={card.front}
          />
        )
      })}
    </StyledReactSortable>
  )
}

/*
 <Card
          key={card.id}
          id={card.id}
          front={card.front}
          isChecked={checkedCards[card.id]}
          setCheckedCards={setCheckedCards}
        />
                  */
