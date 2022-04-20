import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from ".";


export default {
	title: 'Base Components/Input',
	component: Input,
} as ComponentMeta<typeof Input>

export const InputStory: ComponentStory<typeof Input> = (args) => 
	<Input {...args} />
