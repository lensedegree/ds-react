import '@overlens/ds-css/src/components/Textarea/index.css'

interface TextareaProps {
	tip?: string
	placeholder?: string
	defaultValue?: string
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
}

export const Textarea = ({
	tip = '',
	placeholder = '',
	defaultValue = '',
	theme = 'morpho-blue'
}: TextareaProps) => {
	return (
		<>
			<div className={`
				textarea-input
				theme--${theme}
			`}>
				<textarea
					placeholder={placeholder}
					value={defaultValue}
				></textarea>
			</div>
			<p className={`
				textarea-message
				${tip !== '' ? 'active': 'deactive'}`
			}>
				{tip}
			</p>
		</>
	)
}