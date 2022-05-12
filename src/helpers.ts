import { Response } from "./mockResponse"

export function makeGrid(size: number) {
  const grid = []
  const cells = size * size

  let i = 0
  let x = 0
  let y = 0

  while (i < cells) {
    grid.push([x, y])

    if (x === 9) {
      y += 1
      x = 0
      i += 1
      continue
    }

    i += 1
    x += 1
  }

  return grid
}

export function mapCells(data: Response) {
  const map: Record<string, any> = {}

  for (const ship of data.layout) {
    for (const position of ship.positions) {
      map[`${position.toString()}`] = { type: ship.ship, hit: false }
    }
  }

  return map
}
