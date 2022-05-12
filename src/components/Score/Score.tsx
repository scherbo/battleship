import React from 'react'
import { Ships } from '../../mockResponse'

interface ScoreProps {
    ships: Ships
}

export function ScoreBase({ ships }: ScoreProps) {
    return (
        <div className="score">
            {Object.entries(ships).map(([type, shipData]) => <div key={type}>{type} - {shipData.size}</div>)}
        </div>
    )
}

export const Score = React.memo(ScoreBase)