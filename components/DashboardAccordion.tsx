import * as React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography, Chip, Stack, TextField, Card, Button, Snackbar, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import BorderColorIcon from '@mui/icons-material/BorderColor'

import { Alert } from '../components'

type Props = {
	expanded: string | boolean,
	handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
	key: string
}

const DashboardAccordion = ({ expanded, handleChange, key }: Props) => {

	const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

	return (
		<Accordion expanded={expanded === key} onChange={handleChange(key)}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
					Snap Title
				</Typography>
				<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Stack direction='column' spacing={4}>
					<Stack direction='row' spacing={1}>
						<Chip label='tag1' size='small' color='primary' />
						<Chip label='tag2' size='small' color='primary' />
					</Stack>
					<Stack direction='row' spacing={2} >
						<TextField id="standard-basic" label="Variable" variant="standard" />
						<TextField id="standard-basic" label="Name" variant="standard" />
					</Stack>
					<Card  sx={{ backgroundColor: '#171219', color: 'white', p: 1 }}>
						<code >
							templete<br />
							will be here
						</code>
					</Card>
					<Stack spacing={2} direction='row'>
						<Button variant='contained' color='warning' onClick={handleClick} startIcon={<ContentCopyIcon />}>Copy</Button>
						<Button variant='outlined' color='warning' startIcon={<BorderColorIcon />}>Edit</Button>
					</Stack>
				</Stack>
				<Typography sx={{ color: 'text.secondary', mt:2 }}>References: </Typography>
				<Stack pl={2}>
					<Link sx={{fontSize: '12px', cursor: 'pointer'}} href='https://github.com/Tomo-ja' target='_blank' rel="noreferrer">https://github.com/Tomo-ja</Link>
					<Link sx={{fontSize: '12px', cursor: 'pointer'}} href='https://github.com/Tomo-ja' target='_blank' rel="noreferrer">https://github.com/Tomo-ja</Link>
				</Stack>
				<Snackbar 
					anchorOrigin={{ vertical:'bottom', horizontal: 'center' }}
					open={open}
					autoHideDuration={1000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity='success' sx={{width: '100%'}}>
						Copied Snap
					</Alert>
				</Snackbar>
			</AccordionDetails>
		</Accordion>
	)
}

export default DashboardAccordion