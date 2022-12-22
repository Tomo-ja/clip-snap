import { GetServerSideProps } from 'next'
import Router from "next/router";
import Head from 'next/head'
import React, { useState, useEffect, use } from 'react'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

import { IconButton, Box, CssBaseline, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { Header, DashboardHeader, DashboardContent, Modal, NavigationMenu } from '../components'
import { appAxios } from '../lib/axios';
import { User } from '../helpers/typesLibrary'

type Props = {
  window?: () => Window,
  user?: User
}

const Home = ({ window, user }: Props) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    // if (!user) {
    //   Router.replace('/login')
    // }
  }, [])


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
      </Box>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userId = getCookie('user-id', { req })
  if (!userId) return { props: {}}
  
  const response = await appAxios.post('/api/user/show', {id: userId})
  const user: User = response.data

  // fetch folder names

  return {
    props: {
      user
    }
  }
}