import { useState } from "react";

const useSort = (data, config) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortOrder === null) {
          setSortOrder("asc");
          setSortBy(label);
        } else if (sortOrder === "asc") {
          setSortOrder("desc");
          setSortBy(label);
        } else if (sortOrder === "desc") {
          setSortOrder(null);
          setSortBy(null);
        }
      };
    
    
      // Only Sort Data if sortOrder && Sort by are not null
      //   Make a copy of the 'data' prop
      let sortedData = data;
    
      if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
    
        sortedData = [...data].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
    
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
    
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB * reverseOrder);
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }

      return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
      }
}

export default useSort