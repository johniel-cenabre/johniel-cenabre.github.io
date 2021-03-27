import React, { useContext, useEffect } from 'react'
import View from './GridView'

const GridContainer = props => {
  return <View
    {...props}
  />
}

export default React.memo(GridContainer)
