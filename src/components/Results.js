import React from 'react';

const Results = ({ ipAddress, location, timezone, isp }) => {
	return (
		<div className='Results-Container'>
			<div className='Results-Data'>
				<h2>IP ADDRESS</h2>
				<h1>{ipAddress}</h1>
			</div>
			<div className='Results-Data'>
				<h2>LOCATION</h2>
				<h1>{location}</h1>
			</div>
			<div className='Results-Data'>
				<h2>TIMEZONE</h2>
				<h1>{timezone}</h1>
			</div>
			<div className='Results-Data'>
				<h2>ISP</h2>
				<h1>{isp}</h1>
			</div>
		</div>
	);
};

export default Results;
