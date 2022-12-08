import Head from 'next/head'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

import { Header, DrawerContent, DashboardHeader, DashboardContent } from '../components'
import { IconButton } from '@mui/material'

const drawerWidth = 240

type Props = {
  window?: () => Window
}

const Home = ({ window }: Props) => {
  
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <Head>
        <title>Snap Clip - Home</title>
      </Head>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <Header />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        ></Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <DashboardHeader />
          <DashboardContent />
        </Box>
      </Box>
    </div>
  )
}

export default Home