import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Main = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
			<CardContent>
				<Typography align='center' variant='h5'>
					Total Balance $100
				</Typography>
				<Typography
					variant='subtitle 1'
					style={{ lineHeight: '1.5rem', marginTop: '20px' }}
				>
					Try Saying: Add income for $100 in Category Salary for Monday
				</Typography>
				<Divider />
				<CardContent className={classes.CardContent}>
					<Grid container spacing={2}>
						<Grid item xs={12}></Grid>
					</Grid>
				</CardContent>
			</CardContent>
		</Card>
	);
};

export default Main;
