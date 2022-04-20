import { Children, ReactElement } from 'react'

import '@overlens/ds-css/src/components/RadioButton/index.css'

interface RadioButtonProps {
	alignment?: 'vertical' | 'horizontal'
	size?: 'small' | 'medium'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	name?: string
	children: ReactElement | ReactElement[]
}

export const RadioButton = ({
	alignment = 'vertical',
	size = 'medium',
	theme = 'morpho-blue',
	name = 'default-radio-button',
	children
}: RadioButtonProps) => {

	return (
		<div className={`
			radio-button
			alignment--${alignment}
			size--${size}
			theme--${theme}
		`}>
			{Children.map(children, child => {
				if(child.props['aria-checked']) {
					return (
						<span>
							<input value={child.props['option-value']} type="radio" name={name} defaultChecked />
							<label htmlFor={child.props['option-value']}>{child.props.children}</label>
						</span>
					)
				}

				return (
					<span>
						<input value={child.props['option-value']} type="radio" name={name} />
						<label htmlFor={child.props['option-value']}>{child.props.children}</label>
					</span>
				)
			})}
		</div>
	)
}