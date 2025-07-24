interface PaginationProps {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // number of pages before/after current
}

const Pagination = ({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  const DOTS = "...";

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const getPaginationRange = () => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  };

  const paginationRange = getPaginationRange();
		/*
		 Maximum numbers pages that will be shown 2 for siblings, 2 first and last page, 1 current page, 2 for possible dots
		example: if siblingCount = 1.. totalPages = [1]...[5][6][7]...[20]
			*/

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>

      {paginationRange.map((page, idx) =>
        page === DOTS ? (
          <span key={idx} className="dots">
            {DOTS}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        )
      )}

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
