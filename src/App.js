import React from 'react'
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { indigo, green, blue, lightGreen } from '@mui/material/colors'
import { Container, CssBaseline } from '@mui/material'
import { CurrentCards } from './components/CurrentCards'

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
const cards = [...Array(TOTAL_ITEMS).keys()].map((i) => ({
  id: i + 1,
  url: "/card-dnd/resources/"
    + values[getRandomInt(0, values.length)]
    + seeds[getRandomInt(0, seeds.length)]
    + ".svg",
  chosen: false,
  filtered: false,
  selected: false,
}))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <CurrentCards cards={cards} />} />
      </Container>
    </ThemeProvider>
  )
}

export default App;
