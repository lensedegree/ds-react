import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioButton } from ".";

export default {
	title: 'Base Components/RadioButton',
	component: RadioButton,
} as ComponentMeta<typeof RadioButton>

export const RadioButtonStory: ComponentStory<typeof RadioButton> = (args) => 
	<RadioButton {...args}>
		<option option-value="css">CSS</option>
		<option option-value="web-components" aria-checked>Web Components</option>
		<option option-value="react">React</option>
	</RadioButton>
