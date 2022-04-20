import { ReactChild, useState } from "react";

import '@overlens/ds-css/src/components/Acorddion/index.css'

interface AcorddionProps {
	title?: string
	size?: 'normal' | 'tiny'
	active?: boolean
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	children?: ReactChild | ReactChild[]
}

export const Acorddion = ({
	title = 'Adicione um título ao acorddion através do atributo \'title\'',
	size = 'normal',
	active = false,
	theme = 'morpho-blue',
	children
}: AcorddionProps) => {
	const [opened, setOpened] = useState(active)

	function toggleAcorddion() {
		setOpened(!opened)
	} 

	return (
		<div 
			className={`acorddion theme--${theme}`}
			onClick={toggleAcorddion}
		>
			<div className={`
				acorddion-title 
				variant--basic 
				size--${size}
				${opened ? 'active' : 'deactive'}
			`}>
				<p>{title}</p>
				<span></span>
			</div>
			<div className={`
				acorddion-body
				size--${size}
				${opened ? 'active' : 'deactive'}
			`}>
				{ 
					children ?? 
					'Adicione um corpo ao seu acorddion como um filho de tag'
				}
			</div>
		</div>
	)
}