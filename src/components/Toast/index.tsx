import '@overlens/ds-css/src/components/Toast/index.css'

interface ToastProps {
	variant?: 'alert' | 'confirmation' | 'information' | 'reward'
	format?: 'mobile' | 'desktop'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	primaryButton?: string
	reward?: number
	title?: string
	onConfirme?: Function
	onClose?: Function
}

export const Toast = ({
	variant = 'confirmation',
	format = 'desktop',
	theme = 'morpho-blue',
	primaryButton = 'OK, OBRIGADO',
	reward = 0,
	title = 'Adicione um título ao toast através da tag \'title\'',
	onConfirme = () => {},
	onClose = () => {}
}: ToastProps) => {

	function handleConfirme() {
		onConfirme()
		handleClose()
	}

	function handleClose() {
		onClose()
	}

	return (
		<div className={`
			toast
			variant--${variant || 'confirmation'}
			format--${format || 'desktop'}
			theme--${theme}
		`}>
			<span>
				<span></span>

				{title}

				{ 
					variant === 'reward'
						? <span>
								<span>
									{ reward >= 0 ? `+${reward}` : reward }
								</span>
			
								<span>FECHAR</span>
							</span>
						: <span>
								<span onClick={handleConfirme}>
									{primaryButton}
								</span>
			
								<span onClick={handleClose}>FECHAR</span>
							</span>
				}
			</span>

			<span><hr /></span>
			<span><hr /></span>
		</div>
	)
}