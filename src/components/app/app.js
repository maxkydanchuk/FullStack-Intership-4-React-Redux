import { React, useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PrizesDataGrid from "../prizes-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, sortAndSearchData } from "../../store/actions";

function App() {
  const reduxStore = useSelector((state) => ({
    reduxData: state.data,
    error: state.error,
  }));

  const filteredReduxData = useSelector((state) => state.filteredData) || [];

  const dispatch = useDispatch();

  let { reduxData = [], error } = reduxStore;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [inputValue, setSearchValue] = useState("");
  const [sortOrder, setOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  useEffect(() => {
    dispatch(
      sortAndSearchData({ sortOrder, sortColumn, inputValue }, reduxData)
    );
  }, [sortOrder, sortColumn, inputValue, reduxData.length]);

  const onSortChange = (newSortColumn, newSortOrder) => {
    if (sortColumn === newSortColumn) {
      setOrder(!newSortOrder);
    } else {
      setOrder(true);
    }

    setSortColumn(newSortColumn);
  };

  const onSearchChange = (e) => {
    setSearchValue(e.target.value); //rename value
  };

  return (
    <ChakraProvider>
      <Box
        className="table__wrapper"
        border="1px solid rgba(224, 224, 224, 1)"
        borderRadius="4"
      >
        <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue} />
        <AppHeader
          onSortChange={onSortChange}
          sortOrder={sortOrder}
          setOrder={() => setOrder}
          sortColumn={sortColumn}
        />
        <PrizesDataGrid prizesData={filteredReduxData} error={error} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
