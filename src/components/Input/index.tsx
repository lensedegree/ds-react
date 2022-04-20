import '@overlens/ds-css/src/components/Input/index.css'
import { useState } from 'react'

interface InputProps {
	variant?: 'email' | 'name' | 'password' | 'phone' | 'search' | 'text'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	defaultValue?: string
	placeholder?: string
	disable?: boolean
	visibility?: boolean
	error?: boolean
	errorMessage?: string
}

/* FIXME: A maneira que o erro é ativado não permite configurar
uma mensagem de erro previamente e ativar dado um evento. Teria
que deixar sem mensagem de erro e quando um evento ocorresse o
componente teria que ser reconstruido */

export const Input = ({
	variant = 'text',
	theme = 'morpho-blue',
	defaultValue = '',
	placeholder = 'Digite o texto aqui',
	disable = false,
	visibility = false,
	error = false,
	errorMessage = '',
}: InputProps) => {
	const [value, setValue] = useState<string>(defaultValue)

	return(
		<>
			<div className={`
				input
				variant--${variant}
				theme--${theme}
				${disable ? 'disable' : ''}
				${error ? 'error' : ''}
			`}>
				<span></span>
				<input 
					type={`${variant === 'password' && !!!visibility ? 'password' : 'text'}`}
					placeholder={placeholder}
					value={value}
					readOnly={disable}
					onChange={(event) => {setValue(event.target.value)}}
				/>
				<span className={`
					${value !== '' ? 'active' : 'deactive'}
					${visibility ? 'hide' : 'show'}
				`}></span>
			</div>
			<p className={`
				input-message
				${errorMessage !== '' ? 'active' : 'deactive'}
				${error ? 'error' : 'notify'}
			`}>
				{errorMessage}
			</p>
		</>
	)
}