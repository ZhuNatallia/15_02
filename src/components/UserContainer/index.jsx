import React, { useState } from 'react';
import AddUserM from '../AddUserM';
import AddUserW from '../AddUserW';
import User from '../User';
import s from './style.module.css';

export default function UserContainer() {
	const defaulUsers = [
		{
			id: 1,
			img: 'https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697__340.jpg',
			name: 'Ivan',
			gender: 'man',
		},
		{
			id: 2,
			img: 'https://cdn.pixabay.com/photo/2017/08/06/00/44/people-2587179__340.jpg',
			name: 'Olga',
			gender: 'woman',
		},
		{
			id: 3,
			img: 'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg',
			name: 'Julia',
			gender: 'woman',
		},
		{
			id: 4,
			img: 'https://cdn.pixabay.com/photo/2017/08/02/23/58/people-2574170__340.jpg',
			name: 'Oleg',
			gender: 'man',
		},
	];

    const [users, setUsers] = useState(defaulUsers);
    const [userM, setUserM] = useState([]);
    const [userW, setUserW] = useState([]);

	const deleteUser = (delId) => {
		const newArr = users.filter(({ id }) => id !== delId);
		setUsers(newArr);
	};

	const createUser = (name, photo, gender) => {
		const newUser = {
			id: Date.now(),
			name,
			photo,
			gender,
		};
		if (gender = 'man'){
            setUserM([...userM])
        }else{
            setUserW([...userW])
        }
		const newArr = [...users, newUser];
		setUsers(newArr);
	};

	return (
		<div>
			<AddUserM createUser={createUser} />
			<AddUserW createUser={createUser} />
			
			<div className={s.cardContainer}>
				{users.map((user) => (
					<User key={user.id} {...user} deleteUser={deleteUser} />
				))}
			</div>
		</div>
	);
}
