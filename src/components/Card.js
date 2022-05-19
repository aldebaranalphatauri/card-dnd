import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'

export const cardHeight = 84
export const cardWidth = 60

export const Card = ({ id, front, coord, isChecked, setCheckedCards }) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked((isChecked !== undefined) ? isChecked : false)
  }, [isChecked])

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
      return newState
    })
  }

  const StyledImg = styled('img')(({ theme }) => {
    return ((coord === null) ? {
      border: checked ? '2px solid blue' : '2px solid transparent',
    } : {
      border: checked ? '2px solid blue' : '2px solid transparent',
      position: 'absolute',
      left: coord.x,
      top: coord.y,
      transform: 'rotate(' + Math.round(coord.angle) + 'deg) translateZ(0px)',
    })
  })

  /*
   return (
     <Box
       sx={divStyle}
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
     </Box>
   )
 */

  return (
    <StyledImg
      onClick={handleChange}
      src={"/card-dnd/resources/" + front + ".svg"}
      height={cardHeight}
      width={cardWidth}
      alt={front}
    />
  )
}