import React, {useState, useEffect} from 'react';
import styles from './Pagination.module.css';
import * as axios from 'axios';


let PrevButtons = React.memo(({currentPortion,changeCurrentPortion,lastPortion}) =>{
	let toFirstPortion = () =>{
		changeCurrentPortion(1);
	}
	let toPrevPortion = () =>{
		changeCurrentPortion(currentPortion-1);
	}
	
	if(lastPortion==1){
		return null;
	}
	return (
		<div>
			<button onClick={toFirstPortion} disabled={currentPortion==1} >&lt;&lt;</button>
			<button onClick={toPrevPortion} disabled={currentPortion==1} >&lt;</button>
		</div>
	);
})

let NextButtons =  React.memo(({currentPortion,changeCurrentPortion,lastPortion}) =>{
	let toLastPortion = () =>{
		changeCurrentPortion(lastPortion);
	}
	let toNextPortion = () =>{
		changeCurrentPortion(currentPortion+1);
	}
	if(lastPortion==1){
		return null;
	}
	return (
		<div>
			<button onClick={toNextPortion} disabled={currentPortion==lastPortion} >&gt;</button>
			<button onClick={toLastPortion} disabled={currentPortion==lastPortion} >&gt;&gt;</button>
		</div>
	);
})

let Pagination =  React.memo(({totalPages, setCurrentPage, pagesInPortion}) =>{
	let [currentPortion,changeCurrentPortion]=useState(1);
	let totalPortionsCount=Math.ceil(totalPages/pagesInPortion);
	let firstPageInCurrentPortion = ((currentPortion-1)*pagesInPortion)+1;
	let lastPageInCurrentPortion = firstPageInCurrentPortion+(pagesInPortion-1);
	if(lastPageInCurrentPortion>totalPages){
		lastPageInCurrentPortion=totalPages;
	}
	let pagesElements;
	let pages=[];
	for(let i=firstPageInCurrentPortion;i<=lastPageInCurrentPortion;i++){
		pages.push(i);
	};
	pagesElements = pages.map(page=>(<span key={page} onClick={()=>setCurrentPage(page)}>| {page} |</span>));
	
	return(
		<div>
			<PrevButtons currentPortion={currentPortion} changeCurrentPortion={changeCurrentPortion} lastPortion={totalPortionsCount}/>
			{pagesElements}
			<NextButtons currentPortion={currentPortion} changeCurrentPortion={changeCurrentPortion} lastPortion={totalPortionsCount}/>
		</div>
	)
})

export default Pagination;

