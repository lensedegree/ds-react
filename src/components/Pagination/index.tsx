import { ReactElement, useState } from 'react'

import { IconShape } from '../IconShape'

import '@overlens/ds-css/src/components/Pagination/index.css'

interface PaginationProps {
	variant?: 'default' | 'basic' | 'extended'
	theme?: 'morpho-blue' | 'yellow-lens' | 'green-lens' | 'red-lens' 
		| 'purple-lens' | 'orange-lens' | 'lime-lens'
	startPage?: number
	lastPage?: number
	children: ReactElement | ReactElement[]
}

export const Pagination = ({
	variant = 'default',
	theme = 'morpho-blue',
	startPage = 1,
	lastPage = 2,
	children
}: PaginationProps) => {
	const [activePage, setActivePage] = useState(startPage)

	function handlePageChange(page: number) {
		if(page < 1) setActivePage(1)
		else if(page > lastPage) setActivePage(lastPage)
		else setActivePage(page)
	}

	if(variant === 'default') {
		/* FIXME: Adicionar onClick no componente IconShape */
		return (
			<div className={`
				pagination
				variant--default
				theme--${theme}
			`}>
				<IconShape shape="circle">
					<span className="material-icons-outlined md-24">
						arrow_back
						<style>
							{`
								.material-icons-outlined.md-24 {
									font-size: 24px;
								}
							`}
						</style>
					</span>
				</IconShape>

				<IconShape shape="circle">
					<span className="material-icons-outlined md-24">
						arrow_forward
						<style>
							{`
								.material-icons-outlined.md-24 {
									font-size: 24px;
								}
							`}
						</style>
					</span>
				</IconShape>
			</div>
		)
	}

	if(variant === 'basic') {
		return (
			<div className={`
				pagination
				variant--basic
				theme--${theme}
			`}>
				<div onClick={() => { handlePageChange(activePage - 1) }}>
					<span></span>
				</div>
				
				<div><input value={`${activePage}`} /></div>

				<div><p>de {lastPage}</p></div>

				<div onClick={() => { handlePageChange(activePage + 1) }}>
					<span></span>
				</div>
			</div>
		)
	}

	if(lastPage < 7) {
		return (
			<div className={`
				pagination
				variant--extended
				theme--${theme}
			`}>
				<div>
					<span></span>
				</div>

				<div>
					{Array.from(Array(lastPage), (_, i) => i+1).map(pageNumber => (
						<div 
							className={`${activePage === pageNumber ? 'active' : 'deactive'}`}
							onClick={() => { handlePageChange(pageNumber) }}
						>
							{pageNumber}
						</div>
					))}
				</div>

				<div>
					<span></span>
				</div>
			</div>
		)
	}

	if(activePage < 4) {
		return(
			<div className={`
				pagination
				variant--extended
				theme--${theme}
			`}>
				<div>
					<span></span>
				</div>

				<div>
					<div 
						className={`${activePage === 1 ? 'active' : 'deactive'}`}
						onClick={() => { handlePageChange(1) }}
					>
						1
					</div>
					<div 
						className={`${activePage === 2 ? 'active' : 'deactive'}`}
						onClick={() => { handlePageChange(2) }}
					>
						2
					</div>
					<div 
						className={`${activePage === 3 ? 'active' : 'deactive'}`}
						onClick={() => { handlePageChange(3) }}
					>
						3
					</div>
					<div 
						className="deactive"
						onClick={() => { handlePageChange(4) }}
					>4</div>
					<div 
						className="deactive"
						onClick={() => { handlePageChange(5) }}
					>5</div>

					<div className="horiz">
						<span></span>
					</div>

					<div 
						className="deactive"
						onClick={() => { handlePageChange(+lastPage) }}
					>{lastPage}</div>
				</div>

				<div>
					<span></span>
				</div>

				<div>
					<input />
					<span></span>
				</div>
			</div>
		)
	}

	if(activePage < lastPage - 2) {
		return (
			<div className={`
				pagination
				variant--extended
				theme--${theme}
			`}>
				<div>
					<span></span>
				</div>
	
				<div>
					<div 
						className="deactive"
						onClick={() => { handlePageChange(1) }}
					>1</div>
	
					<div className="horiz">
						<span></span>
					</div>
	
					<div 
						className="deactive"
						onClick={() => { handlePageChange(activePage - 1) }}
					>{activePage - 1}</div>

					<div 
						className="active"
						onClick={() => { handlePageChange(activePage) }}
					>{activePage}</div>

					<div 
						className="deactive"
						onClick={() => { handlePageChange(activePage + 1) }}
					>{activePage + 1}</div>
	
					<div className="horiz">
						<span></span>
					</div>
	
					<div 
						className="deactive"
						onClick={() => { handlePageChange(lastPage) }}
					>{lastPage}</div>
				</div>
	
				<div>
					<span></span>
				</div>
	
				<div>
					<input />
					<span></span>
				</div>
			</div>
		)
	}

	return (
		<div className={`
			pagination
			variant--extended
			theme--${theme}
		`}>
			<div>
				<span></span>
			</div>

			<div>
				<div 
					className="deactive"
					onClick={() => { handlePageChange(1) }}
				>1</div>

				<div className="horiz">
					<span></span>
				</div>

				<div 
					className="deactive"
					onClick={() => { handlePageChange(lastPage - 4) }}
				>
					{lastPage - 4}
				</div>

				<div 
					className="deactive"
					onClick={() => { handlePageChange(lastPage - 3) }}
				>
					{lastPage - 3}
				</div>

				<div 
					className={`${activePage === lastPage - 2 ? 'active': 'deactive'}`}
					onClick={() => { handlePageChange(lastPage - 2) }}
				>
					{lastPage - 2}
				</div>

				<div 
					className={`${activePage === lastPage - 1 ? 'active': 'deactive'}`}
					onClick={() => { handlePageChange(lastPage - 1) }}
				>
					{lastPage - 1}
				</div>

				<div 
					className={`${activePage >= lastPage ? 'active': 'deactive'}`}
					onClick={() => { handlePageChange(lastPage) }}
				>
					{lastPage}
				</div>
			</div>

			<div>
				<span></span>
			</div>

			<div>
				<input />
				<span></span>
			</div>
		</div>
	)
}