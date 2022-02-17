import { ReactNode } from "react";
import { MdArrowForward } from 'react-icons/md'

import './index.css'

interface ButtonProps {
	children: ReactNode
	variant?: 'basic' | 'primary' | 'secundary' | 'tertiary'
	size?: 'large' | 'medium' | 'small'
  onClick?: () => void;
}

function Button({ 
	children, 
	variant = 'primary',
	size = 'large',
  ...props
}: ButtonProps) {

	if(variant === 'basic') {
		return (
			<button 
				className={"button-reset variant--basic size--basic"}
				{...props}
			>
				{children}
				<MdArrowForward size={16} />
			</button>
		)
	}

	return(
		<button className={`button-reset variant--${variant} size--${size}`}>
			{children}
		</button>
	)
}

export { Button }