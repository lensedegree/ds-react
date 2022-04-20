import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

export default {
	title: 'Base Components/Button',
	component: Button,
	argTypes: {
		onClick: {
			control: { type: 'none' }
		}
	}
} as ComponentMeta<typeof Button>

function onClick() {
	console.log('Clicou')
}

export const ButtonStory: ComponentStory<typeof Button> = (args) => 
	<Button {...args} onClick={onClick}>
		Clique aqui
	</Button>
