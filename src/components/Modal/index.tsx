import { ReactChild } from 'react'

import { Button } from '../Button'

import '@overlens/ds-css/src/components/Modal/index.css'

interface ModalProps {
	variant?: 'alert' | 'confirmation'
	format?: 'mobile' | 'desktop'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	info?: string
	primaryButton?: string
	onClick?: Function
	onClose?: Function
	children: ReactChild
}

export const Modal = ({
	variant = 'confirmation',
	format = 'desktop',
	theme = 'morpho-blue',
	info = '',
	primaryButton = 'Confirmar',
	onClick = () => {},
	onClose = () => {},
	children
}: ModalProps) => {

	function handleConfirmation() {
		onClick()
		handleClose()
	}

	function handleClose() {
		onClose()
	}

	return (
		<div 
			className={`
				modal
				variant--${variant}
				format--${format}
        theme--${theme}
			`}
		>
			<span>
				<span>
					<p>{children}</p>
					<p>{info}</p>
				</span>

				<span onClick={handleClose}></span>
			</span>

			<span>
				<Button 
					variant={variant === 'alert' ? 'danger' : 'primary'}
					theme={theme} 
					size={'medium'}
					onClick={handleConfirmation}
				>{primaryButton}</Button>

				<Button 
					variant='tertiary'
					size='medium'
					onClick={handleClose}
				>Cancelar</Button>
			</span>
		</div>
	)
}