import { useState } from "react";
import { CelestialBody } from "../App";


interface PaginationProps {
	PaginationDataProp: CelestialBody[];
	pageSize?: number;
}

const Pagination = ({ PaginationDataProp }: PaginationProps, pageSize = 25) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(PaginationDataProp.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentItems = PaginationDataProp.slice(startIndex, endIndex);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	return (
		<div>
			{/*Rendered items*/}
			<ul>
				{currentItems.map((item) => (
					<li key={item.id}>{item.englishName}</li>
				))}
			</ul>
			{/*Page Controls*/}
			<div>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<button
						key={page}
						onClick={() => handlePageChange(page)}
						className={currentPage === page ? "active" : ""}
					>
						{page}
					</button>
				))}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
