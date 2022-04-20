import { useState } from 'react'

import '@overlens/ds-css/src/components/ToggleButton/index.css'

interface ToggleButtonProps {
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens',
	defaultActive?: boolean
}

export const ToggleButton = ({
	theme = 'morpho-blue',
	defaultActive = false
}: ToggleButtonProps) => {
	const [active, setActive] = useState(defaultActive)

	function toggleActive() {
		setActive(!active)
	}

	return (
		<div 
			className={`
				toggle-button 
				theme--${theme}
				${active ? 'active' : 'deactive'}
			`}
			onClick={toggleActive}
		>
			<div className="toggle"></div>
		</div>
	)
}