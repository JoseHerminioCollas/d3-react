import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'

import D3React from '../d3-react'
import BarChart from '../components/bar-chart'
import LineChart from '../components/line-chart'
import PieChart from '../components/pie-chart'
import Control from '../components/control'
import config from '../config'
import data from '../data'
import withResources from '../components/hoc/with-resources'

// the main event emitter
const events = new EventEmitter()
const BarChartWrapper = withResources(BarChart, { config })
const LineChartWrapper = withResources(LineChart, { config, events })
const PieChartWrapper = withResources(PieChart, { events, config })
const ControlWrapper = withResources(Control, { events, config })
const D3ReactWrap = withResources(D3React, {
    config,
    events,
    data,
    BarChart: BarChartWrapper,
    LineChart: LineChartWrapper,
    PieChart: PieChartWrapper,
    Control: ControlWrapper,
})

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<D3ReactWrap />, div)
    ReactDOM.unmountComponentAtNode(div)
})