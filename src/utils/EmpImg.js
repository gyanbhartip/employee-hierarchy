import React from 'react'

export const EmpImg = ({ name }) => {
    return (
        <svg width="50" height="50">
            <circle cx="25" cy="25" r="25" fill="currentColor" />
            <text x="50%" y="50%" alignmentBaseline="central" textAnchor="middle" fontFamily="sans-serif" fontSize="25" fill="#fff">{name}</text>
        </svg>
    )
}
