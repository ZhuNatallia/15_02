import React from 'react';
import s from './style.module.css';


export default function User({ id, img, name, gender, deleteUser }) {
    return (
			<div>
				<div className={s.card}>
					<img className={s.cardPhoto} src={img} alt='people' />
					<p>{name}</p>
					<p></p>
					<button onClick={() => deleteUser(id)}>X</button>
				</div>
			</div>
		);
}
