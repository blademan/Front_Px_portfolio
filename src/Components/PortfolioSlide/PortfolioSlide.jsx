export default function PortfolioSlide(props) {
	return (
		<>
			<div className='flex flex-col justify-center pt-12 items-center '>
				<div className='flex flex-col md:flex-row space-y-3 md:space-x-10 px-4 pb-20'>
					<img src={props.img} alt='Lake' className='max-w-xs item-center aspect-[4/3]' />
					<div className='flex flex-col pt-6'>
						<h3 className='dark:text-D_titleColor font-bold text-left text-2xl'>{props.title}</h3>
						<p className='dark:text-D_textColor text-textColor pb-6 pt-2'>{props.description}</p>
						<a
							className='flex justify-between space-x-2 mt-8 w-48 bg-firstColor px-4 py-4 font-medium rounded-md text-white hover:bg-firstColorAlt cursor-pointer'
							name='Link'
							href={props.link}
							icon='uil uil-download-alt '
						>
							Link <i className='uil uil-message button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
