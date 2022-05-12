import React from 'react'
import { ShipKeys } from '../../mockResponse'
import { Cell } from '../Cell/Cell'

interface BoardProps {
    grid: number[][],
    shipCells: Record<string, { type: ShipKeys, hit: boolean }>
    handleClick: (cell: number[]) => void
}

export function Board({ grid, shipCells, handleClick }: BoardProps) {
    return (
      <div className="grid">
        {grid.map(cell => {
          const found = shipCells[cell.toString()]
          return <Cell key={cell.toString()} hit={found?.hit} onClick={() => handleClick(cell)} />
        })}
      </div>
    )
}