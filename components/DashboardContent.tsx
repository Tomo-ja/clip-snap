import * as React from 'react'

import { Box } from '@mui/material'

import { DashboardAccordion } from '../components'



const DashboardContent = () => {
	const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box p={3} sx={{ backgroundColor: '#ECECEC' }}>
      <DashboardAccordion expanded={expanded} handleChange={handleChange} key='unique key'/>
    </Box>
  )
}

export default DashboardContent