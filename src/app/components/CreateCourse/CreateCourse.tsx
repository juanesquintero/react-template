import React from 'react';
import '@app/App.scss';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';

const CreateCourse: React.FC = () => {
	return (
		<form className='bg-white rounded p-5'>
			<div className='form-row'>
				<div className='form-inline'>
					<label>Title</label>
					<br />
					<Input
						type='text'
						placeholder='Python Course No. 1'
						size='sm'
						inline={true}
						className='mr-auto'
					/>

					<Button
						type='submit'
						text='Create course'
						icon='plus'
						style='outline-dark'
					/>
				</div>
				<div className='form-group'>
					<label>Description</label>
					<Input type='textarea' placeholder='Password' />
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
