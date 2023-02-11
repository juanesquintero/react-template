import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
	return (
		<section className='search-bar'>
			<span className='d-flex'>
				<Input className='search-bar__input' type='text' />
				<Button text='Search' style='light'></Button>
			</span>

			<Button text='Add Course' style='dark' icon='bi bi-plus'></Button>
		</section>
	);
};

export default SearchBar;
