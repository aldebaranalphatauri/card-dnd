import { useRef, useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { cardHeight, cardWidth } from './Straight'


export const Card = ({ id, text, index, moveCard, isChecked, setCheckedCards }) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked((isChecked !== undefined) ? isChecked : false)
  }, [isChecked])

  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get horizontal middle
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging to right
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return
      }

      // Dragging to left
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const handleChange = (event) => {
    const changed = !checked
    setChecked(changed)

    setCheckedCards(prevState => {
      let newState = prevState
      if (changed) {
        newState[id] = true
      } else {
        delete newState[id]
      }
      //console.log("newState", newState)
      return newState
    })
  }

  const StyledImg = styled('img')(({ theme }) => ({
    opacity: isDragging ? 0 : 1,
    cursor: 'move',
    border: checked ? '2px solid blue' : 'none',
    //height: cardHeight + 8,
    //width: cardWidth + 8,
  }))

  drag(drop(ref))

  return (
    <div
      onClick={handleChange}
      ref={ref}
      data-handler-id={handlerId}
    >
      <StyledImg
        src={"/resources/" + text + ".svg"}
        height={cardHeight}
        width={cardWidth}
        alt={text}
      />
    </div>
  )
}