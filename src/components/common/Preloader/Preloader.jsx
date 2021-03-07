import React from 'react';
import preloaderSRC from './../../../assets/preloader.svg';

let Preloader = () =>{
	return (
		<div>
			<img src={preloaderSRC} alt='preloader' />
		</div>
	)
}

export default Preloader;