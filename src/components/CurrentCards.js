import { useState } from "react"
import { styled } from '@mui/material/styles'
import { ReactSortable } from "react-sortablejs"

export const cardHeight = 84
export const cardWidth = 60

const StyledReactSortable = styled(ReactSortable)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}))

const StyledImg = styled('img')(({ theme }) => ({
  cursor: 'move',
}))

export function CurrentCards({ cards }) {
  const [list, setList] = useState(cards)
  return (
    <StyledReactSortable
      list={list}
      setList={setList}
      animation={150}
    >
      {list.map(item => (
        <StyledImg 
          key={item.id}
          src={item.url}
          height={cardHeight}
          width={cardWidth}
          alt={'text' + item.id}
          />
      ))}
    </StyledReactSortable>
  )
}
