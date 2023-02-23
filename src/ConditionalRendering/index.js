import React, { useState } from 'react'
//	COMPONENTS
import Button from '../components/Button';
import Modal from '../components/Modal';
import WithWrapper from '../HOC/WithWrapper'

function ContitionalRendering() {
	const [bool, setBool] = useState(false);
	const [showModal, setModal] = useState('');

	const handleClick = () => {
		setBool(!bool)
	}

	const handleModal = (modal) => {
		if (!modal) {
			setModal('')
		} else setModal(modal)
	}

	return (
		<div>
			<div style={{ display: 'flex', gap: '8px' }}>
				<Button
					title='change state'
					variant='outlined'
					color='#3D0F0C'
					onClick={handleClick}
				/>

				<Button
					title='show important modal'
					variant='outlined'
					color='#3D0F0C'
					onClick={() => handleModal('important')}
				/>

				<Button
					title='show very important modal'
					variant='outlined'
					color='#3D0F0C'
					onClick={() => handleModal('very_important')}
				/>
			</div>

			{bool &&
				<p>true</p>
			}

			{bool ?
				<p>bool = true</p>
				:
				<p>bool = false</p>
			}

			{showModal == 'important' &&
				<Modal closeModal={handleModal}>
					<p>Important modal!</p>
				</Modal>
			}

			{showModal == 'very_important' &&
				<Modal closeModal={handleModal}>
					<p>Very important modal!</p>
				</Modal>
			}
		</div>
	)
}

export default WithWrapper(ContitionalRendering)
