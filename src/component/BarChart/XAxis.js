import React from 'react'
import * as d3 from 'd3'
import xScaleBarChart from './x-scale-bar-chart'

const XAxis = ({ data, cssClasses }) => {
  const width = parseInt(cssClasses.getRule('chartXAxis').prop('width'), 10)
  const xAxisD3Node = d3.axisBottom()
    .scale(xScaleBarChart(data.map(d => d[0]), [0, width]))
    .ticks(data.length / 2)

  return (
    <g
      className={cssClasses.classes.chartXAxis}
      ref={node => d3.select(node).call(xAxisD3Node)}
    />
  )
}
export default XAxis
