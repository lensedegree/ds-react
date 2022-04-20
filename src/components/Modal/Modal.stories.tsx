import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from ".";

export default {
	title: 'Base Components/Notification',
	component: Modal,
	argTypes: {
		onClick: {
			control: { type: 'none' }
		},
		onClose: {
			control: { type: 'none' }
		},
	}
} as ComponentMeta<typeof Modal>

function onConfirme() {
	console.log('confirmou')
}

function onClose() {
	console.log('fechou')
}

export const ModalStory: ComponentStory<typeof Modal> = (args) => 
	<Modal {...args} onClick={onConfirme} onClose={onClose}>
		O que deve ser confirmado pelo usuário?
	</Modal>
