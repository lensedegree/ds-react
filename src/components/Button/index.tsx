import { ReactChild } from "react"

import '@overlens/ds-css/src/components/Button/index.css'

interface ButtonProps {
	variant?: 'basic' | 'primary' | 'secundary' | 'tertiary' | 'danger' | 'disable'
	size?: 'small' | 'medium' | 'large'
	icon?: boolean
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	onClick?: Function
	children: ReactChild
}

export const Button = ({
	variant = 'primary',
	size = 'large',
	icon = false,
	theme = 'morpho-blue',
	onClick = () => {},
	children
}: ButtonProps) => {

	function handleClick() {
		onClick()
	}

	if(variant === 'basic') {
		return (
			<button 
				className={`button variant--basic theme--${theme}`} 
				onClick={handleClick}
			>
				{children}
				<span></span>
			</button>
		)
	}

	return (
		<button 
			className={`button variant--${variant} size--${size} theme--${theme}`}
			onClick={handleClick}
		>
			{children}
			{
				icon && <span className="material-icons-outlined md-18">
					file_download
					<style>
						{`
							.material-icons-outlined.md-18 {
								font-size: 18px;
							}
						`}
					</style>
				</span>
			}
		</button>
	)
}