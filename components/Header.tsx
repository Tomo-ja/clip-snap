import * as React from 'react'
import Image from 'next/image'

import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import MoreIcon from '@mui/icons-material/MoreVert'
import PublicIcon from '@mui/icons-material/Public';

import { SearchBar, HeaderMobileMenu, Modal } from '../components'
import useModal from '../customHooks/useModal'
import { ModalType } from '../helpers/enums'

const PrimarySearchAppBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false)
  const { modalState, handleModalOpen, handleModalClose } = useModal()

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsMobileMenuOpen(true)
  }

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
            <IconButton size="large" color="inherit">
              <PublicIcon />
            </IconButton>
            <IconButton onClick={() => handleModalOpen(ModalType.Setting)} size="large" color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton onClick={() => handleModalOpen(ModalType.UpdateProfile)} size="large" edge="end" color="inherit" >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
      <Modal modalState={modalState} handleModalClose={handleModalClose} />
    </Box>
  )
}

export default PrimarySearchAppBar