import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumbs } from ".";


export default {
	title: 'Base Components/Breadcrumbs',
	component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

export const BreadcrumbsStory: ComponentStory<typeof Breadcrumbs> = (args) => 
	<Breadcrumbs {...args}>
		<a href="#">Crumb 01</a>
		<a href="#">Crumb 02</a>
		<a href="#">Crumb 03</a>
		<a href="#">Crumb 04</a>
	</Breadcrumbs>
