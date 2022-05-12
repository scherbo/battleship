import React from 'react'

interface CellProps {
    hit: boolean;
    onClick: () => void
}

function CellBase({ hit, onClick }: CellProps) {
    return <div className="cell" onClick={onClick}>{hit ? 'x' : 'o'}</div>
}

export const Cell = React.memo(CellBase)