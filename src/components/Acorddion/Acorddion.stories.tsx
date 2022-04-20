import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Acorddion } from ".";

export default {
	title: 'Base Components/Acorddion',
	component: Acorddion,
} as ComponentMeta<typeof Acorddion>

export const AcorddionStory: ComponentStory<typeof Acorddion> = (args) => 
	<Acorddion {...args}>
		<p>O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço 
		por meio de divulgação progressiva. O usuário obtém detalhes importantes 
		sobre o conteúdo subjacente e pode optar por expandir esse conteúdo dentro 
		das restrições do acordeão. Os acordeões funcionam especialmente bem em 
		interfaces móveis ou sempre que o espaço vertical é necessário.</p>
	</Acorddion>
