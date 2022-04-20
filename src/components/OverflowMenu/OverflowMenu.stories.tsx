import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OverflowMenu } from ".";

export default {
	title: 'Base Components/Menu',
	component: OverflowMenu,
} as ComponentMeta<typeof OverflowMenu>

function firstOptionClick() {
	console.log('Clicou na opção 1')
}

function thirdOptionClick() {
	console.log('Clicou na opção 3')
}

export const OverflowMenuStory: ComponentStory<typeof OverflowMenu> = (args) => 
	<OverflowMenu {...args}>
		<option onClick={firstOptionClick}>Option 1</option>
		<a href="#"><option>Option 2</option></a>
		<option onClick={thirdOptionClick}>Option 3</option>
	</OverflowMenu>
