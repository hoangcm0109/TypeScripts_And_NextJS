import { Theme } from "@emotion/react"
import { AppBar, Box, Button, Chip, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material"
import { createStyles, makeStyles } from '@mui/styles';
import { useEffect, useState } from "react"
import WelcomeMessage from "./WelcomeMessage"

const useStyles = makeStyles((theme: Theme) => createStyles({
		positionSelect: {
			color: 'white !important',
			border: '1px solid white'
		}
	})
)

const Navbar = () => {
    const classes = useStyles()

	// useState
	const [position, setPosition] = useState<string>('Full-stack Developer')

	const onPositionChange = (event: SelectChangeEvent<string>) => {
		setPosition(event.target.value as string)
	}

	const [time, setTime] = useState<Date>(() => new Date(Date.now()))

    useEffect(() => {
		const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
		return () => clearInterval(timer)
	}, [])

    return (    
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
                    <Typography variant='h6'>My movie</Typography>
                    <Box textAlign='center'>
						{(
							<>
								<WelcomeMessage position={position} />
								{/* <Chip
									label={`Last time working on this project: ${lastTime} - Status: ${status}`}
								/> */}
								<Box mt={1}>
									<FormControl>
										<Select
											value={position}
											className={classes.positionSelect}
											onChange={onPositionChange}
										>
											<MenuItem value='Full-stack Developer'>
												Full-stack Developer
											</MenuItem>
											<MenuItem value='Front-end Developer'>
												Front-end Developer
											</MenuItem>
											<MenuItem value='Back-end Developer'>
												Back-end Developer
											</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</>
						)}
					</Box>

                    <Box textAlign='center'>
						<Box my={1}>
							<Typography variant='h6'>{time.toUTCString()}</Typography>
						</Box>
						<Button
							variant='contained'
							// onClick={
							// 	isAuthenticated
							// 		? toggleAuth.bind(this, '')
							// 		: setLoginOpen.bind(this, true)
							// }
						>
							{/* {isAuthenticated ? 'Logout' : 'Login'} */}Login
						</Button>
					</Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
