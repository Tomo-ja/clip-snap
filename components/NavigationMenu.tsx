import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import { DrawerContent } from '../components'

type Props = {
	mobileMenuOpen: boolean,
	handleDrawerToggle: () => void,
	window?: () => Window

}

const NavigationMenu = ({ mobileMenuOpen, handleDrawerToggle, window }: Props) => {
	const drawerWidth = 240

	const container = window !== undefined ? () => window().document.body : undefined


	return (
		<>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
      ></Box>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileMenuOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', 
					width: drawerWidth },
				}}
				PaperProps ={{
					sx: { backgroundColor: '#171219', color: '#fff'}
				}}
			>
				<DrawerContent />
			</Drawer>
			<Drawer
          className='helper'
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          PaperProps ={{
            sx: { backgroundColor: '#171219', color: '#fff'}
          }}
          open
        >
          <DrawerContent />
        </Drawer>
		</>
	)
}

export default NavigationMenu