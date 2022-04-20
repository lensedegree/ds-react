import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from ".";

import Image from '../../../.storybook/assets/Ilhama-bgyellow.png'

export default {
	title: 'Base Components/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>

export const AvatarStory: ComponentStory<typeof Avatar> = (args) => 
	<Avatar {...args}>{Image}</Avatar>
