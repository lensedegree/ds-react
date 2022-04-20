import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from ".";


export default {
	title: 'Base Components/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const CheckboxStory: ComponentStory<typeof Checkbox> = (args) => 
	<Checkbox {...args}>
		<option option-name="option_01">Opção 01</option>
		<option option-name="option_01" aria-checked>Opção 02</option>
		<option option-name="option_01">Opção 03</option>
	</Checkbox>
