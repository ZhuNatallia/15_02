import React from 'react';

export default function AddUserW({ createUser }) {
	const onSubmit = (event) => {
		event.preventDefault();
		const { name, photo, gender } = event.target;
		createUser(name.value, photo.value, (gender.value = 'woman'));
		name.value = '';
		photo.value = '';
		gender.value = '';
	};

	return (
		<form onSubmit={onSubmit}>
			
		</form>
	);
}
