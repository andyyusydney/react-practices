import React, { useEffect } from "react";
import { useState } from "react";

const WithSorting = (WrappedComponent: any) => {
  return ({stories, ...restProps}: any) => {
    const [keyword, setKeyword] = useState("title");
    const [sortedList, setSortedList] = useState([]);

    const handleClick = (searchKeyword: string) => {
      setKeyword(searchKeyword);
    };

    useEffect(() => {
      const sortedTempList = sorting(sortedList, keyword);
      setSortedList(sortedTempList);
    }, [keyword]);

	useEffect(() => {
		setSortedList(stories)
	}, [stories])

    return (
      <>
        <button
          disabled={keyword === "title" ? true : false}
          onClick={() => handleClick("title")}
        >
          Title
        </button>
        <button
          disabled={keyword === "created_at" ? true : false}
          onClick={() => handleClick("created_at")}
        >
          Created at
        </button>
        <WrappedComponent stories={sortedList} {...restProps} />
      </>
    );
  };
};

const sorting = (sortingList: any, myKeyword = "title") => {
	return [...sortingList].sort((a: any, b: any) => {
	  if (a[myKeyword] < b[myKeyword]) {
		return -1;
	  }
	  if (b[myKeyword] > a[myKeyword]) {
		return 1;
	  }

	  return 0;
	});
  };

export default WithSorting;
