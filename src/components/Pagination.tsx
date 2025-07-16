import { useState } from "react";

const Pagination = ({ data, itemsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = data.slice(startIndex, endIndex);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	};
	console.log(currentItems.id)

	return (
		<>
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
		</>
	);
};

export default Pagination;
