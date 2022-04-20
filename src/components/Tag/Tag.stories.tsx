import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tag } from ".";

export default {
	title: 'Base Components/Tag',
	component: Tag,
	argTypes: {
		onClick: {
			control: { type: 'none' }
		}
	}
} as ComponentMeta<typeof Tag>

function closeTag() {
	console.log('fechou')
}

export const TagStory: ComponentStory<typeof Tag> = (args) => 
	<Tag {...args} onClick={closeTag}>
		Overlens
	</Tag>
