import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown } from ".";


export default {
	title: 'Base Components/Dropdown',
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>

export const DropdownStory: ComponentStory<typeof Dropdown> = (args) => 
	<Dropdown {...args}>
		<option>Opção 01</option>
		<option>Opção 02</option>
		<option>Opção 03</option>
	</Dropdown>
