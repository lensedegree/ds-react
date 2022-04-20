import { ReactChild } from "react";

import '@overlens/ds-css/src/components/Tag/index.css'

interface TagProps {
	variant?: 'selection' | 'filter'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	onClick?: Function
	children: ReactChild
}

export const Tag = ({
	variant = 'selection',
	theme = 'morpho-blue',
	onClick = () => {},
	children
}: TagProps) => {

	function handleClick() {
		onClick()
	}

	return (
		<div 
			className={`tag variant--${variant} theme--${theme}`}
		>
			<p>{children}</p>
			<div onClick={handleClick}>
				<span></span>
			</div>
		</div>
	)
}