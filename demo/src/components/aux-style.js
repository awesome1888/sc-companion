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
  underline,
  textDecoration,
  heightTrick,
  absoluteCover,
  disabled,
} from "../lib/mixins.js"
import { makeGrid, cell, grid } from "../lib/grid"
import * as Z from "../lib/constants"
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
  ${underline("on-hover", "1px", "red", "200ms")}
`

export const Decorated = styled.span`
  ${textDecoration("on-hout", "underline red")}
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
//
// const GridSys = makeGrid({
//   gutterH: "1rem",
//   gutterV: "1rem",
// })
//
// export const Grid = styled(GridSys.Grid)``
//
// export const Cell = styled(GridSys.Cell)``
//
// const GridSysAlt = makeGrid({
//   gutterH: "0.5rem",
//   gutterV: "0.5rem",
//   resolution: 20,
//   breakpoints: {
//     a: 1400,
//     b: 1200,
//     c: 1000,
//     d: 800,
//     e: 600,
//   },
// })
//
// export const GridAlt = styled(GridSysAlt.Grid)``
//
// export const CellAlt = styled(GridSysAlt.Cell)``

const theme = {
  grid: {
    resolution: 12,
    breakpoints: {
      xs: [null, 767], // max-width: 767
      sm: [768, 991], // min-width: 768 and max-width: 991
      md: [992, 1199], // min-width: 992 and max-width: 1199
      lg: [1200, null], // min-width: 1200
    },
  },
}

export const Grid = styled.div`
  ${grid(
    { gutters: { all: "1rem", md: "0.7rem", sm: "0.5rem", xs: "0.2rem" } },
    theme.grid
  )}
`

export const Cell = styled.div`
  ${cell({ xs: 3, sm: 6, md: 9, lg: 12 }, theme.grid)}
`

export const CellRev = styled.div`
  ${cell({ xs: 9, sm: 6, md: 3, lg: 12 }, theme.grid)}
`

export const GridInner = styled.div`
  border: 1px solid #6f2b9e;
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
`

export const Levels = styled.div`
  ${align("top", "left", "column")}
`

export const zindexed = (offs, zIndex) => {
  return `
    ${rectangle("3rem", "5rem")}
     border: 1px solid #6f2b9e;
     border-radius: 4px;
     background-color: white;
     ${align("center", "center")}
     ${offs ? `margin-top: -0.5rem; margin-left: ${offs}rem;` : ""}
     font-size: 12px;
     color: gray;
     z-index: ${zIndex};
     text-align: center;
  `
}

export const Sun = styled.div`
  ${zindexed(0, Z.zIxSun)};
`

export const Venus = styled.div`
  ${zindexed(1, Z.zIxVenus)};
`

export const Mars = styled.div`
  ${zindexed(2, Z.zIxMars)};
`

export const Moon = styled.div`
  ${zindexed(3, Z.zIxMoon)};
`

export const Orbit = styled.div`
  ${zindexed(4, Z.zIxOrbit)};
`

export const Stratosphere = styled.div`
  ${zindexed(5, Z.zIxStratosphere)};
`

export const Everest = styled.div`
  ${zindexed(6, Z.zIxEverest)};
`

export const Ground = styled.div`
  ${zindexed(7, Z.zIxGround)};
`

export const SeaBottom = styled.div`
  ${zindexed(8, Z.zIxSeaBottom)};
`

export const Hell = styled.div`
  ${zindexed(9, Z.zIxHell)};
`

export const DisabledForm = styled.div`
  ${disabled(0.3)}
`
