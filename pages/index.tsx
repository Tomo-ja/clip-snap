import Head from 'next/head'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'

import { Header, DrawerContent, DashboardHeader, DashboardContent, Modal, NavigationMenu } from '../components'
import { IconButton } from '@mui/material'
import { GetServerSideProps } from 'next'

const drawerWidth = 240

type Props = {
  window?: () => Window
}

const Home = ({ window }: Props) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <Head>
        <title>Snap Clip - Home</title>
      </Head>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <Header />
        <NavigationMenu 
          window={window}
          mobileMenuOpen={mobileMenuOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          className='test-main'
          sx={{
            flexGrow: 1,
            width: '100%',
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
            <MenuIcon sx={{marginLeft: 3}}/>
          </IconButton>
          <DashboardHeader />
          <DashboardContent />
        </Box>
        <Modal />
      </Box>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  return {
    props: {

    }
  }
}