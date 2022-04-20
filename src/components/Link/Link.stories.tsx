import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link } from ".";

export default {
	title: 'Base Components/Link',
	component: Link,
} as ComponentMeta<typeof Link>

export const LinkStory: ComponentStory<typeof Link> = (args) => 
	<Link {...args}>
		Clique aqui
	</Link>
