import Head from 'next/head'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { DrawerListTitles } from '../helpers/enums'


type Props = {
	title: DrawerListTitles
}

const DrawerListTitle = ({ title }: Props) => {

	return (
		<Box pl={3} pr={2} pt={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
			<Typography
				variant='h6'
				component='h3'
				sx={{fontWeight: 'bold'}}
			>
				{title}
			</Typography>
			<IconButton size="large" sx={{paddingBlock: 0}} aria-label="show add modal" color="inherit">
				<AddIcon style={{ color: 'white'}}/>
			</IconButton>
	</Box>
	)
}

export default DrawerListTitle