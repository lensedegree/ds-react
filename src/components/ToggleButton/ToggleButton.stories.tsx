import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToggleButton } from ".";

export default {
	title: 'Base Components/ToggleButton',
	component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>

export const ToggleButtonStory: ComponentStory<typeof ToggleButton> = (args) => 
	<ToggleButton {...args} />
