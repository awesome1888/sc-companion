import React from "react"
import styled from "styled-components"
import { align, centralColumn, backgroundCover, group } from "../lib/mixins.js"
import CoinImage from "../images/coin.png" // http://www.iconarchive.com/show/super-mario-icons-by-ph03nyx.html

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
