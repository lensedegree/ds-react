import { ReactChild, Children } from 'react'

import '@overlens/ds-css/src/components/Breadcrumbs/index.css'

interface BreadcrumbsProps {
	variant?: 'primary' | 'secundary'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	children: ReactChild | ReactChild[]
}

/* TODO: Transformar o último a em div e remover o href */

export const Breadcrumbs = ({ 
	variant = 'primary', 
	theme = 'morpho-blue',
	children
}: BreadcrumbsProps) => {
	return(
		<div className={`breadcrumbs variant--${variant} theme--${theme}`}>
			{
				Children.map(children, (child, i) => {
					if(i > 0) {
						return (
							<>
								<span></span>
								{child}
							</>
						)
					}

					return child
				})
			}
		</div>
	)
}