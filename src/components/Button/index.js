import React from 'react'
import styles from './button.module.css'


export default function Button({ title, variant, color }) {

	if (variant == 'contained') {
		return (
			<button
				className={[styles.button, styles.contained].join(' ')}
				style={{ background: color }}
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
			>
				{title}
			</button>
		)
	}

	else return (
		<button
			className={styles.button}
			style={{ color }}
		>
			{title}
		</button>
	)
}

Button.defaultProps = {
	title: 'title'
}