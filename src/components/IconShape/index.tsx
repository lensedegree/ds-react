import '@overlens/ds-css/src/components/IconShape/index.css'
import { ReactChild } from 'react'

interface IconShapeProps {
	shape?: 'square' | 'circle'
	size?: 'small' | 'medium'
	variant?: 'outlined' | 'filled'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	children: ReactChild
}

export const IconShape = ({
	shape = 'square',
	size = 'medium',
	variant = 'filled',
	theme = 'morpho-blue',
	children
}: IconShapeProps) => {
	return(
		<div className={`
			icon-shape
			shape--${shape}
			size--${size}
			variant--${variant}
			theme--${theme}
		`}>
			{children}
		</div>
	)
}