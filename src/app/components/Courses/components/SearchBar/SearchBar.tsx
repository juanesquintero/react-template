import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
	return (
		<section className='search-bar'>
			<span className='search-bar-column'>
				<Input className='search-bar__input' type='text' size='sm' />
				<Button text='Search' style='light' size='sm' className='m-3' />
			</span>

			<Button text='Add Course' style='dark' icon='plus' />
		</section>
	);
};

export default SearchBar;
