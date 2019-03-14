import React from 'react';

const SearchBox= ({searchfield,searchchange}) => 
{
	return(
		<div className='tc br3 grow bw2 shadow-5  '>
		<input type='search'
		placeholder='SEARCH HERE' 
		onChange={searchchange}
		/>
		</div>
		);
	}
export default SearchBox;
