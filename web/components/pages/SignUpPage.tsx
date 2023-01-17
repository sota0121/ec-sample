import * as React from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from '@/components/templates/Copyright'
import { useFirebaseApp } from '@/contexts/FirebaseApp'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

// Sign Up
const signUp = async (email: string, password: string) => {
  try {
    // TODO: Split this into Domain Layer and Infrastructure Layer
    const { app } = useFirebaseApp()
    const auth = getAuth(app)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(userCredential.user)
  } catch (error) {
    // catch error for firebase
    if (error instanceof FirebaseError) {
      // TODO: Handle error then show error message to user
      console.log(`FirebaseError: ${error.code} ${error.message}`)
    }
  }
}

export default function SignUpPage() {
  // // State
  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')

  // Hooks
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  // Handlers
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data)
    signUp(data.email, data.password)
    reset()
  }

  // TODO: Add validation
  // TODO: Split the components into smaller components (e.g. atoms/molecules/organisms)
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='firstName'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    autoComplete='given-name'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    autoFocus
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='lastName'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    autoComplete='family-name'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='email'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    autoComplete='email'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='password'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
