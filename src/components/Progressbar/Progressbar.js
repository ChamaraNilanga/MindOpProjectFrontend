
import React from 'react'

const Progressbar = ({bgcolor,progress}) => {
	
	const Parentdiv = {
		height: '4px',
		width: '150px',
		backgroundColor: '#b8b5b2',
		borderRadius: 40,
		margin: 5
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#f5b042',
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 1,
		color: 'black',
		fontsize:5
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		{/* <span style={progresstext}>{`${progress}%`}</span> */}
	</div>
	</div>
	)
}

export default Progressbar;

