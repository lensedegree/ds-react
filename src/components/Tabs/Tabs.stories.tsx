import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs } from ".";
import { Button } from "../Button";

export default {
	title: 'Base Components/Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>

export const TabsStory: ComponentStory<typeof Tabs> = (args) => 
	<Tabs {...args}>
		<option option-title="Tab 01">
			<h1>Título</h1>
			<p>Parágrafo</p>
		</option>

		<option option-title="Tab 02" option-active>
			<Button>Clique aqui</Button>
		</option>

		<option option-title="Tab 03">
			<ul>
				<li>primeiro item</li>
				<li>segundo item</li>
				<li>terceiro item</li>
			</ul>
		</option>
	</Tabs>
