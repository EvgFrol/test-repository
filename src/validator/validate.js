export let required =(value) =>{
	if(value){
		return undefined;
	}
	return 'This field is required';
}

export let maxSymbolsLength = (maxLength) => (value) =>{
	if(!value || value.length<=maxLength){
		return undefined;
	}
	return 'Symbols length must be less than ' + maxLength;
}	