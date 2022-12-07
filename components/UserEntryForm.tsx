import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'


import { FormType } from '../helpers/enums'
import { useRouter } from 'next/router'


type Props = {
	formType: FormType
}

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const UserEntryForm = ({ formType }: Props) => {
	const navigation = useRouter()
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

	const switchAccountEntryPages = () => {
		if ( formType === FormType.LogIn ) {
			navigation.push('/signin')
		} else if ( formType === FormType.SignIn ) {
			navigation.push('/login')
		}
	}

	return (
		<Stack
			spacing={5} p={2} pt={5} pb={5}
			sx={{ 
				flexGrow: 1,
				borderRadius: 2,
				border: 1,
				borderColor: '#D9D9D9',
				backgroundColor: '#fff',
			}}
		>
			<Typography
				variant='h5'
				noWrap
				component='h3'
				fontWeight={600}
			>
				{ formType }
			</Typography>

			<TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          value={values.email}
					placeholder='hello@example.com'
          onChange={handleChange('email')}
      />

			<FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
						placeholder='Enter more than 8 letters or numbers'
          />
        </FormControl>

			{ formType === FormType.LogIn && 
				<Button variant="text" sx={{fontSize: '10px'}}>Forget your password?</Button>
			}
			<Button variant="contained" color='warning' fullWidth>{ formType }</Button>

			{ formType === FormType.LogIn ?
				<Button onClick={()=> switchAccountEntryPages()} variant="text" sx={{fontSize: '10px'}}>Do you have an account already?</Button>
				:
				<Button onClick={()=> switchAccountEntryPages()} variant="text" sx={{fontSize: '10px'}}>You don&apost have an account?</Button>
			}
		</Stack>
	)
}

export default UserEntryForm