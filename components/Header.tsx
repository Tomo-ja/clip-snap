import * as React from 'react'
import Image from 'next/image'

import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import MoreIcon from '@mui/icons-material/MoreVert'
import PublicIcon from '@mui/icons-material/Public';

import { SearchBar, HeaderMobileMenu } from '../components'


export default function PrimarySearchAppBar() {
    React.useState<null | HTMLElement>(null)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false)

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsMobileMenuOpen(true)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = <HeaderMobileMenu mobileMenuId={mobileMenuId} handleMobileMenuClose={handleMobileMenuClose} isMobileMenuOpen={isMobileMenuOpen}/>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} 
        style={{ background: '#F0803C'}} 
        >
        <Toolbar>
          <Image className='application__logo' src='/logo.svg' alt='application logo' width='50' height='30'/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Snap Clip
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <PublicIcon />
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <HelpIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  )
}