import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconShape } from ".";


export default {
	title: 'Base Components/Icon',
	component: IconShape,
} as ComponentMeta<typeof IconShape>

export const IconShapeStory: ComponentStory<typeof IconShape> = (args) => 
	<IconShape {...args}>
		<span className="material-icons-outlined md-20">
			file_download
			<style>
				{`
					.material-icons-outlined.md-20 {
						font-size: 20px;
					}
				`}
			</style>
		</span>
	</IconShape>
