import Head from 'next/head'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

import { Header, DrawerContent } from '../components'
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
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }
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
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Home