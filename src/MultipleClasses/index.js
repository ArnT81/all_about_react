import React from 'react'
import Button from '../components/Button'
import WithWrapper from '../HOC/WithWrapper';

function MultipleClasses() {

	return (
		<div style={{ display: 'grid', gap: '8px' }}>
			<Button
				variant='contained'
				color='red'
			/>

			<Button
				variant='outlined'
				color='red'
			/>

			<Button
				color='red'
			/>
		</div>
	)
}

export default WithWrapper(MultipleClasses)
