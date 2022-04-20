import { Children, ReactElement, useEffect, useState } from "react";

import '@overlens/ds-css/src/components/Tabs/index.css'

interface TabsProps {
	variant?: 'default' | 'container'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
		children: ReactElement | ReactElement[]
}

export const Tabs = ({
	variant = 'default',
	theme = 'morpho-blue',
	children
}: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0)
	const [activeContent, setActiveContent] = useState(<></>)

	useEffect(() => {
		Children.forEach(children, (child, idx) => {
			if(child.props['option-active']){
				setActiveTab(idx)
				setActiveContent(child.props.children)
			}
		});
	}, [children])

	function handleTabChange(tabIndex: number) {
		Children.forEach(children, (child, idx) => {
			if(idx === tabIndex){
				setActiveTab(tabIndex)
				setActiveContent(child.props.children)
			}
		});
	}

	return (
		<div className={`
			tabs
			variant--${variant}
			theme--${theme}
		`}>
			<div className="tabs-header">
				{Children.map(children, (child, idx) => {
					if(idx === activeTab) {
						return (
							<div 
								className="active"
								onClick={() => { handleTabChange(idx) }}
							>
								{child.props['option-title']}
							</div>
						)
					}

					return (
						<div 
							className="deactive"
							onClick={() => { handleTabChange(idx) }}
						>
							{child.props['option-title']}
						</div>
					)
				})}
			</div>

			<div className="
				tabs-content
			">
				{activeContent}
			</div>
		</div>
	)
}