import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagination } from ".";

export default {
	title: 'Base Components/Pagination',
	component: Pagination,
} as ComponentMeta<typeof Pagination>

export const PaginationStory: ComponentStory<typeof Pagination> = (args) => 
	<Pagination {...args} />
