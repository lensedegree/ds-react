import { Children, ReactElement } from 'react'

import '@overlens/ds-css/src/components/Checkbox/index.css'

interface CheckboxProps {
	variant: 'basic' | 'rounded'
	alignment: 'vertical' | 'horizontal'
	size: 'small' | 'medium'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	children: ReactElement | ReactElement[]
}

export const Checkbox = ({
	variant = 'basic',
	alignment = 'vertical',
	size = 'medium',
	theme = 'morpho-blue',
	children
}: CheckboxProps) => {

	return(
		<div className={`
			checkbox
			variant--${variant}
			alignment--${alignment}
			size--${size}
			theme--${theme}
		`}>
			{Children.map(children, child => {
				if(child.props['aria-checked']) {
					return (
						<span>
							<input name={child.props['option-name']} type="checkbox" defaultChecked />
							<label htmlFor={child.props['option-name']}>{child.props.children}</label>
						</span>
					)
				}

				return (
					<span>
						<input name={child.props['option-name']} type="checkbox" />
						<label htmlFor={child.props['option-name']}>{child.props.children}</label>
					</span>
				)
			})}
		</div>
	)
}