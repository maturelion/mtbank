import React from 'react'
import { StatusBarProgress, StatusBarStyle } from './StatusBar.styled'

const StatusBar = (props) => {
    const {width} = props
  return (
    <StatusBarStyle>
        <StatusBarProgress width={width} />
    </StatusBarStyle>
  )
}

export default StatusBar