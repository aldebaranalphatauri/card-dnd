import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { indigo, green, blue, lightGreen } from '@mui/material/colors'
import { Container, CssBaseline } from '@mui/material'
import { CurrentCards2 } from './components/CurrentCards2'

const theme = createTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    },
    background: {
      bore: green[900],
      default: green[800],
      active: lightGreen[200],
      toolbar: lightGreen[50],
    },
  },
})

const TOTAL_ITEMS = 25

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclusive and the minimum is inclusive
}

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'X']
const seeds = ['C', 'D', 'H', 'S']

// url: "https://picsum.photos/60/84?random&" + i
const initial = [...Array(TOTAL_ITEMS).keys()].map((i) => ({
  id: 'id-' + (i + 1),
  url: "/card-dnd/resources/"
    + values[getRandomInt(0, values.length)]
    + seeds[getRandomInt(0, seeds.length)]
    + ".svg",
  front: values[getRandomInt(0, values.length)]  + seeds[getRandomInt(0, seeds.length)],
  chosen: false,
  filtered: false,
  selected: false,
  content: values[getRandomInt(0, values.length)]  + seeds[getRandomInt(0, seeds.length)],
}))

function App() {
  //const [checkedCards, setCheckedCards] = useState({})
  const [cards, setCards] = useState(initial)

  window.addEventListener('click', (event) => {
    // event has already been used for drag and drop
    if (event.defaultPrevented) {
      return
    }

    const id = event.target.id
    if (!id.startsWith('id-')) {
      return
    }
    
    event.preventDefault()

    console.log("event.target.id: ", id)
    /*
    console.log("cards", cards)
    
    const previous = cards
    const newCards = previous.map(item => {
      if (item.id === id) {
        item.selected = !item.selected
      }
      return item
    })

    setCards(newCards)
    */
    setCards(previous => previous.map(item => (item.id === id) ? { ...item, selected: !item.selected} : item ))
  })

  console.log("render app", cards)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <CurrentCards2
          cards={cards}
          setCards={setCards}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App;
