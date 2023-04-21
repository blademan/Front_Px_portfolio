import { Link } from 'react-scroll'

export default function Button(props) {
	let icon = 'uil uil-message button__icon'

	const classNames = (...classes) => {
		return classes.join(' ')
	}
	return (
		<Link
			href={props.href}
			to='contact'
			spy={true}
			smooth={true}
			offset={-50}
			duration={500}
			className={classNames(
				'flex',
				'space-x-2',
				'mt-8',
				'w-48',
				'bg-firstColor',
				'px-4',
				'py-4',
				'font-medium',
				'rounded-md',
				'text-white',
				'hover:bg-firstColorAlt',
				'cursor-pointer',
				props.className
			)}
		>
			<span>{props.name}</span>
			<i className={props.icon || icon}></i>
		</Link>
	)
}
