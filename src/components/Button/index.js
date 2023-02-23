import React from 'react'
import styles from './button.module.css'


export default function Button({ title, variant, color, onClick }) {

	if (variant == 'contained') {
		return (
			<button
			className={[styles.button, styles.contained].join(' ')}
			style={{ background: color }}
			onClick={onClick}
			>
				{title}
			</button>
		)
	}

	else if (variant == 'outlined') {
		return (
			<button
				className={`${styles.button} ${styles.outlined}`}
				style={{ color }}
				onClick={onClick}
			>
				{title}
			</button>
		)
	}

	else return (
		<button
			className={styles.button}
			style={{ color }}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

Button.defaultProps = {
	title: 'title'
}