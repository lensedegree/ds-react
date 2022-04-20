import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea } from ".";

export default {
	title: 'Base Components/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>

export const TextareaStory: ComponentStory<typeof Textarea> = (args) => 
	<Textarea {...args} />
