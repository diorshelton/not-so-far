
interface PaginationProps {
	totalItems: number;
	currentPage: number;
	pageSize: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, currentPage, pageSize, onPageChange} : PaginationProps) => {

	const totalPages = Math.ceil(totalItems / pageSize);

	if (totalPages < 1) return null;

	const handleClick = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<div className="pagination">
				<button
					onClick={() => handleClick(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<button
						key={page}
						onClick={() => handleClick(page)}
						className={currentPage === page ? "active" : ""}
					>
						{page}
					</button>
				))}
				<button
					onClick={() => handleClick(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
	);
};

export default Pagination;
