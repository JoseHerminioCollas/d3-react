import React, { useContext } from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import TitleArea from './component/TitleArea'
import { StoreContext } from './StoreContext'
import ThemeContext from './ThemeContext'
import getStyle, { styleTypes } from './get-style'

function D3Frame() {
  const abc = useContext(ThemeContext)
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={getStyle(state.theme, styleTypes.GENERIC).main()}>
            {abc.a}
            <Chart />
            <TitleArea />
            <Control />
            {
              state.isInfoVisible && <Info onClick={actions.hideInfo} />
            }
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default D3Frame
