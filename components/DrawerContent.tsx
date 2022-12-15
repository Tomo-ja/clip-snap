import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'

import { DrawerList, DrawerListTitle } from '.'
import { DrawerListTitles } from '../helpers/enums'

const DrawerContent = () => {


	return (
		<div>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<DrawerListTitle title={DrawerListTitles.Folder} />
				<DrawerList 
					listListTitles={DrawerListTitles.Folder}
					listItems={['Inbox', 'Starred', 'Send email', 'Drafts']}
				/>
				<Divider sx={{ bgcolor: "#fff" }} />
				<DrawerListTitle title={DrawerListTitles.Tags} />
				<DrawerList
					listListTitles={DrawerListTitles.Tags}
					listItems={['Inbox', 'Starred', 'Send email', 'Drafts',]}
				/>
      </Box>
		</div>
	)
}

export default DrawerContent