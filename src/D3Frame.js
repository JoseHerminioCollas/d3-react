import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import TitleArea from './component/TitleArea'
import config from './config'
import { StoreContext } from './StoreContext'
import getStyle, { styleTypes } from './get-style'


function D3Frame() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={getStyle(state.theme, styleTypes.GENERIC).main()}>
            <Chart
              chartConfig={config.chart}
            />
            <TitleArea />
            <Control />
            <section className="copy-credit">
              <a href="http://goatstone.com" target="new">
                Goatstone &copy; 2019
              </a>
            </section>
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
