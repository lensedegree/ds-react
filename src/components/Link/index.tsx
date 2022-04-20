import { ReactChild } from "react";

import '@overlens/ds-css/src/components/Link/index.css'

interface LinkProps {
	variant?: 'basic' | 'danger'
	size?: 'small' | 'medium' | 'large'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	children: ReactChild
}

export const Link = ({
	variant = 'basic',
	size = 'medium',
	theme = 'morpho-blue',
	children
}: LinkProps) => {
	return (
		<div 
			className={`
				link 
				variant--${variant}
				size--${size}
				theme--${theme}
			`}
		>
			{children}
		</div>
	)
}