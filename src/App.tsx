import React from 'react'
import { mockResponse, Ships, ShipKeys } from './mockResponse'
import { Score } from './components/Score/Score'
import { Board } from './components/Board/Board'
import { makeGrid, mapCells } from './helpers'
import { useAlertShips } from './hooks'
import './App.css'

function App() {
  const [ships, setShips] = React.useState<Ships | null>(null)
  const [shipCells, setShipCells] = React.useState<Record<string, { type: ShipKeys, hit: boolean }> | null>(null)
  const grid = React.useMemo(() => makeGrid(10), [])

  const handleClick = (cell: number[]) => {
    if (shipCells && shipCells[cell.toString()]) {
      const found = shipCells[cell.toString()]

      if (found.hit) {
        return
      }

      console.log('hit')
      const newCell = { ...found, hit: true }
      const newShipCells = {
        ...shipCells,
        [cell.toString()]: newCell
      }

      const newShips = {
        ...ships,
        [found.type]: { size: ships![found.type]!.size -= 1, count: 1 }
      }

      setShips(newShips as Ships)
      setShipCells(newShipCells)
      return
    }

    console.log('miss')
  }

  React.useEffect(() => {
    Promise.resolve(mockResponse)
      .then(response => {
        setShips(response.shipTypes)
        setShipCells(mapCells(response))
      })
  }, [])

  useAlertShips(ships)

  if (!ships || !shipCells) {
    return null
  }

  return (
    <div className="battleship">
      <Board grid={grid} shipCells={shipCells} handleClick={handleClick} />
      <Score ships={ships} />
    </div>
  )
}

export default App
