import styled from "styled-components"
import { align, centralColumn, backgroundCover } from "../lib/mixins.js"
import CoinImage from "../images/coin.png" // http://www.iconarchive.com/show/super-mario-icons-by-ph03nyx.html

export const Central = styled.div`
  ${centralColumn()}
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const RedSquare = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid red;
`

export const Coin = styled.div`
  width: 10px;
  height: 10px;
  ${backgroundCover(CoinImage)};
`

// ROW

export const RowTopLeft = styled(RedSquare)`
  ${align("top", "left")}
`

export const RowTopCenter = styled(RedSquare)`
  ${align("top", "center")}
`

export const RowTopRight = styled(RedSquare)`
  ${align("top", "right")}
`

export const RowCenterLeft = styled(RedSquare)`
  ${align("center", "left")}
`

export const RowCenterCenter = styled(RedSquare)`
  ${align("center", "center")}
`

export const RowCenterRight = styled(RedSquare)`
  ${align("center", "right")}
`

export const RowBottomLeft = styled(RedSquare)`
  ${align("bottom", "left")}
`

export const RowBottomCenter = styled(RedSquare)`
  ${align("bottom", "center")}
`

export const RowBottomRight = styled(RedSquare)`
  ${align("bottom", "right")}
`

// COL

export const ColumnTopLeft = styled(RedSquare)`
  ${align("top", "left", "column")}
`

export const ColumnTopCenter = styled(RedSquare)`
  ${align("top", "center", "column")}
`

export const ColumnTopRight = styled(RedSquare)`
  ${align("top", "right", "column")}
`

export const ColumnCenterLeft = styled(RedSquare)`
  ${align("center", "left", "column")}
`

export const ColumnCenterCenter = styled(RedSquare)`
  ${align("center", "center", "column")}
`

export const ColumnCenterRight = styled(RedSquare)`
  ${align("center", "right", "column")}
`

export const ColumnBottomLeft = styled(RedSquare)`
  ${align("bottom", "left", "column")}
`

export const ColumnBottomCenter = styled(RedSquare)`
  ${align("bottom", "center", "column")}
`

export const ColumnBottomRight = styled(RedSquare)`
  ${align("bottom", "right", "column")}
`

export const C = styled.div`
  ${align("top", "left")}
`