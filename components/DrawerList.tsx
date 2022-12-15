import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import ExtensionIcon from '@mui/icons-material/Extension';
import StyleIcon from '@mui/icons-material/Style';

import { DrawerListTitles } from '../helpers/enums'

type Props = {
	listListTitles: DrawerListTitles,
	listItems: string[]
}

const DrawerList = ({ listListTitles, listItems }: Props) => {

	let icon: JSX.Element
	switch (listListTitles) {
		case DrawerListTitles.Folder:
			icon = <FolderIcon />
			break;
		case DrawerListTitles.SnapType:
			icon = <ExtensionIcon />
			break;
		case DrawerListTitles.Tags:
			icon = <StyleIcon />
			break;
	}

	return (
		<List sx={{paddingBlock: 0}}>
		{listItems.map(text => (
			<ListItem key={text} disablePadding sx={{":hover": {backgroundColor: '#F0803C99'}}}>
				<ListItemButton >
					<ListItemIcon style={{ color: 'white'}}>
						{icon}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			</ListItem>
		))}
	</List>
	)
}

export default DrawerList