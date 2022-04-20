import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from ".";

export default {
	title: 'Base Components/Toast',
	component: Toast,
	argTypes: {
		onConfirme: {
			control: { type: 'none' }
		},
		onClose: {
			control: { type: 'none' }
		},
	}
} as ComponentMeta<typeof Toast>

function onConfirme() {
	console.log('Confirmou')
}

function onClose() {
	console.log('Fechou')
}

export const ToastStory: ComponentStory<typeof Toast> = (args) => 
	<Toast {...args} onConfirme={onConfirme} onClose={onClose} />
