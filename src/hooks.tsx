import React from 'react'
import { Ships } from "./mockResponse"

export function useAlertShips(ships: Ships | null) {
  React.useEffect(() => {
    if (ships?.battleship && ships.battleship.size === 0) {
      alert('Battleship has been sunk!')
    }
  }, [ships?.battleship.size])

  React.useEffect(() => {
    if (ships?.carrier && ships.carrier.size === 0) {
      alert('Carrier has been sunk!')
    }
  }, [ships?.carrier.size])

  React.useEffect(() => {
    if (ships?.cruiser && ships.cruiser.size === 0) {
      alert('Cruiser has been sunk!')
    }
  }, [ships?.cruiser.size])

  React.useEffect(() => {
    if (ships?.destroyer && ships.destroyer.size === 0) {
      alert('Destroyer has been sunk!')
    }
  }, [ships?.destroyer.size])

  React.useEffect(() => {
    if (ships?.submarine && ships.submarine.size === 0) {
      alert('Submarine has been sunk!')
    }
  }, [ships?.submarine.size])

  React.useEffect(() => {
    if (
      ships?.battleship.size === 0 &&
      ships?.carrier.size === 0 &&
      ships?.cruiser.size === 0 &&
      ships?.destroyer.size === 0 &&
      ships?.submarine.size === 0
    ) {
      alert('All ships have been sunk, game over!')
    }
  })
}
