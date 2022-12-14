import * as React from 'react'
import { useRouter } from 'next/router'

import { Stack, Button, Typography, IconButton, OutlinedInput, InputLabel, FormControl, TextField, InputAdornment} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import useUserEntry from '../customHooks/useUserEntry'

import { FormType } from '../helpers/enums'
import { FormInfo } from '../helpers/typesLibrary'


type Props = {
	formType: FormType
}

const UserEntryForm = ({ formType }: Props) => {
  
	const navigation = useRouter()
  const [values, setValues] = React.useState<FormInfo>({
    email: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
  })
  const { tryToLogin, tryToSignUp } = useUserEntry()

  const handleChange =
    (prop: keyof FormInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
			navigation.push('/signup')
		} else if ( formType === FormType.SignUp ) {
			navigation.push('/login')
		}
	}

  const handleSubmission = () => {
    if ( formType === FormType.LogIn ) {
      tryToLogin('tomonao.hj@gmail.com', 'admin1234')
    } else if ( formType === FormType.SignUp ) {
      tryToSignUp('tomo', 'tomo.hj@gmail.com', 'admin1234')
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

        { formType === FormType.SignUp && 
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password Confirm</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.passwordConfirm}
              onChange={handleChange('passwordConfirm')}
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
              label="password confirm"
              placeholder='Enter Password Again'
            />
          </FormControl>
        }


			{ formType === FormType.LogIn && 
				<Button variant="text" sx={{fontSize: '10px'}}>Forget your password?</Button>
			}
			<Button onClick={() => handleSubmission()} variant="contained" color='warning' fullWidth>{ formType }</Button>

			{ formType === FormType.LogIn ?
				<Button onClick={()=> switchAccountEntryPages()} variant="text" sx={{fontSize: '10px'}}>Do you have an account already?</Button>
				:
				<Button onClick={()=> switchAccountEntryPages()} variant="text" sx={{fontSize: '10px'}}>You don&apost have an account?</Button>
			}
		</Stack>
	)
}

export default UserEntryForm