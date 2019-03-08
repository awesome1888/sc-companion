import React, { Component } from 'react';
import * as S from './style.js';

class App extends Component {
    render() {
        return (
            <S.Central>
                <S.C>
                    <S.RowTopLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.RowTopLeft>
                    <S.RowTopCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.RowTopCenter>
                    <S.RowTopRight>
                        <S.Coin />
                        <S.Coin />
                    </S.RowTopRight>

                    <S.RowCenterLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.RowCenterLeft>
                    <S.RowCenterCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.RowCenterCenter>
                    <S.RowCenterRight>
                        <S.Coin />
                        <S.Coin />
                    </S.RowCenterRight>

                    <S.RowBottomLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.RowBottomLeft>
                    <S.RowBottomCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.RowBottomCenter>
                    <S.RowBottomRight>
                        <S.Coin />
                        <S.Coin />
                    </S.RowBottomRight>
                </S.C>

                <S.C>
                    <S.ColumnTopLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnTopLeft>
                    <S.ColumnTopCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnTopCenter>
                    <S.ColumnTopRight>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnTopRight>

                    <S.ColumnCenterLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnCenterLeft>
                    <S.ColumnCenterCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnCenterCenter>
                    <S.ColumnCenterRight>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnCenterRight>

                    <S.ColumnBottomLeft>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnBottomLeft>
                    <S.ColumnBottomCenter>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnBottomCenter>
                    <S.ColumnBottomRight>
                        <S.Coin />
                        <S.Coin />
                    </S.ColumnBottomRight>
                </S.C>
            </S.Central>
        );
    }
}

export default App;
