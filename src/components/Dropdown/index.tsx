import React, { Children, ReactChild, ReactEventHandler, useState } from 'react'

import '@overlens/ds-css/src/components/Dropdown/index.css'

interface DropdownProps {
	active?: boolean
	children: any
}

type SelectedProps = {
	id: number | null
	content: string | null
}

export const Dropdown = ({ 
	active = false,
	children

}: DropdownProps) => {
	const [opened, setOpened] = useState(active)
	const [selected, setSelected] = useState<SelectedProps>({ 
		id: null,
		content: null
	})

	function handleOpen() {
		setOpened(!opened)
	}

	function handleSelect(id: number, content: string) {
		setSelected({ id, content })
		handleOpen()
	}

	/* FIXME: Tipar corretamente o evento  */
	function clearSelected(event: any) {
		event.stopPropagation()
		setSelected({ id: null, content: null })
	}

	return (
		<>
			<div className={`
				dropdown
				${opened ? 'active' : 'deactive'}
			`} onClick={handleOpen}>
				<input
					type="text"
					readOnly
					value={`${ selected.content ?? 'Selecione uma opção'}`}
				/>
				<span 
					className={`${ selected.id === 0 || selected.id ? 'selected' : 'unselected' }`}
					onClick={ event => { clearSelected(event) }}
				></span>
				<span></span>
			</div>
			<div className={`
				dropdown-options
				${opened ? 'active' : 'deactive'}
			`}>
				{Children.map(children, (child, i) => {
					return (
						<option className={`
							${i === selected.id ? 'selected' : 'unselected'}
						`} onClick={() => { handleSelect(i, child.props.children) }}>
							{child.props.children}
						</option>
					)
				})}
			</div>
		</>
	)
}