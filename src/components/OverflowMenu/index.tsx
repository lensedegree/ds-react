import { ReactElement, useState } from 'react'

import '@overlens/ds-css/src/components/OverflowMenu/index.css'

interface OverflowMenuProps {
	defaultOpen?: boolean
	children: ReactElement | ReactElement[]
}

export const OverflowMenu = ({
	defaultOpen = false,
	children
}: OverflowMenuProps) => {
	const [open, setOpen] = useState(defaultOpen)

	function handleOpen() {
		setOpen(!open)
	}

	return (
		<>
			<div className={`overflow menu`} onClick={handleOpen}>
				<span></span>
			</div>
			<div className={`overflow options ${open ? 'active' : 'deactive'}`}>
				{children}
			</div>
		</>
	)
}