import '@overlens/ds-css/src/components/Avatar/index.css'

import defaultImage from '../../assets/avatar-default.jpg'

interface AvatarProps {
	size?: 'small' | 'medium' | 'large'
	notify?: number
	state?: 'hidden' | 'offline' | 'online'
	action?: 'hidden' | 'edit' | 'add' | 'delete'
	children?: string
}

export const Avatar = ({
	size = 'medium',
	notify = 0,
	state = 'hidden',
	action = 'hidden',
	children
}: AvatarProps) => {
	return (
		<div className={`avatar-container size--${size}`}>
			<div className="avatar">
				<img src={children || defaultImage} alt="Profile avatar" />
			</div>
			
			<div className={`state--${notify < 1 ? 'hidden' : 'notify'}`}>
				{notify > 99 ? '+99' : notify}
			</div>
			
			<div className={`state--${state}`}></div>
			
			<div className={`action--${action}`}>
				<span></span>
			</div>
		</div>
	)
}