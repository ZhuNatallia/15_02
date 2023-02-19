import React from 'react';

export default function AddUserM({ createUser}) {
	const onSubmit = (event) => {
		event.preventDefault();
		const { name, photo, gender } = event.target;
		createUser(name.value, photo.value, (gender.value = 'man'));
		name.value = '';
		photo.value = '';
		gender.value = '';
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='Имя' name='name' />
			<input type='text' placeholder='Ссылка на аватарку' name='photo' />
			<input type='text' placeholder='Man or Woman' name='gender' />
			<button>Добавить</button>
		</form>
	);
}
