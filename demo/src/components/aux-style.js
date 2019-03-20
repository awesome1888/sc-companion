import React from "react"
import styled from "styled-components"
import {
  align,
  centralColumn,
  backgroundCover,
  group,
  rectangle,
  icon,
  ellipsis,
  fgColor,
  bgColor,
  dashedUnderline,
  heightTrick,
  absoluteCover,
  disabled,
} from "../lib/mixins.js"
import { makeGrid } from "../lib/grid"
import CoinImage from "../images/coin.png" // http://www.iconarchive.com/show/super-mario-icons-by-ph03nyx.html
import MushroomImage from "../images/mushroom.png"

export const Central = styled.div`
  ${centralColumn()}
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const Square = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #6f2b9e;
  border-radius: 4px;
`

export const Coin = styled.div`
  width: 10px;
  height: 10px;
  ${backgroundCover(CoinImage)};
`

export const Coins = () => {
  return (
    <>
      <Coin />
      <Coin />
      <Coin />
    </>
  )
}

// ROW

export const RowTopLeft = styled(Square)`
  ${align("top", "left")}
`

export const RowTopCenter = styled(Square)`
  ${align("top", "center")}
`

export const RowTopRight = styled(Square)`
  ${align("top", "right")}
`

export const RowCenterLeft = styled(Square)`
  ${align("center", "left")}
`

export const RowCenterCenter = styled(Square)`
  ${align("center", "center")}
`

export const RowCenterRight = styled(Square)`
  ${align("center", "right")}
`

export const RowBottomLeft = styled(Square)`
  ${align("bottom", "left")}
`

export const RowBottomCenter = styled(Square)`
  ${align("bottom", "center")}
`

export const RowBottomRight = styled(Square)`
  ${align("bottom", "right")}
`

// COL

export const ColumnTopLeft = styled(Square)`
  ${align("top", "left", "column")}
`

export const ColumnTopCenter = styled(Square)`
  ${align("top", "center", "column")}
`

export const ColumnTopRight = styled(Square)`
  ${align("top", "right", "column")}
`

export const ColumnCenterLeft = styled(Square)`
  ${align("center", "left", "column")}
`

export const ColumnCenterCenter = styled(Square)`
  ${align("center", "center", "column")}
`

export const ColumnCenterRight = styled(Square)`
  ${align("center", "right", "column")}
`

export const ColumnBottomLeft = styled(Square)`
  ${align("bottom", "left", "column")}
`

export const ColumnBottomCenter = styled(Square)`
  ${align("bottom", "center", "column")}
`

export const ColumnBottomRight = styled(Square)`
  ${align("bottom", "right", "column")}
`

export const C = styled.div`
  ${align("top", "left")}
  ${group(null, "0.5rem")}
`

export const Group = styled.div`
  ${group("1rem", "1rem")}
  display: flex;
  flex-wrap: wrap;
`

export const Mushroom = styled.div`
  ${rectangle("3rem")}
  ${backgroundCover(MushroomImage)}
  background-color: #8c8a8a;
  flex-shrink: 0;
`

export const Rect = styled.div`
  ${rectangle("10rem", "20rem", 0.5)}
  background-color: red;
`

export const IconFace = styled.div`
  ${icon("face", "3rem", "2rem")}
`

export const TooLong = styled.div`
  ${ellipsis()}
  width: 5rem;
`

export const BeautifulA = styled.a`
  ${fgColor("red", "blue", "200ms")}
`

export const BeautifulButton = styled.button`
  ${bgColor("red", "blue", "green", "200ms")}
  padding: 1rem 2rem;
  color: white;
  border: none;
  border-radius: 4px;
  user-select: none;
  outline: none;
  cursor: pointer;
`

export const DashEm = styled.span`
  ${dashedUnderline("on-hover", "1px", "red", "200ms")}
`

export const Constraint = styled.div`
  max-width: 10rem;
`

export const Equality = styled.div`
  ${heightTrick()}
  border: 1px solid #6f2b9e;
  border-radius: 4px;
`

export const EqInner = styled.div`
  ${absoluteCover()}
  padding: 1rem;
`

export const Disabled = styled.button`
  ${props => (props.disabled ? disabled() : "")}
`

export const TBC = styled.div`
  padding-top: 3rem;
  ${align("center", "center")}
  font-size: 1.5rem;
`

const GridSys = makeGrid({
  gutterH: "1rem",
  gutterV: "1rem",
})

export const Grid = styled(GridSys.Grid)``

export const Cell = styled(GridSys.Cell)``

const GridSysAlt = makeGrid({
  gutterH: "0.5rem",
  gutterV: "0.5rem",
  resolution: 20,
  breakpoints: {
    a: 1400,
    b: 1200,
    c: 1000,
    d: 800,
    e: 600,
  },
})

export const GridAlt = styled(GridSysAlt.Grid)``

export const CellAlt = styled(GridSysAlt.Cell)``

export const GridInner = styled.div`
  border: 1px solid #6f2b9e;
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
`
