import apiService from "../services/api-service";

const api = new apiService();

export const fetchDataSuccess = (payload) => ({
  type: "FETCH_DATA_SUCCESS",
  payload,
});

export const dataHaveError = (bool) => ({
  type: "DATA_HAVE_ERROR",
  haveError: bool,
});

export const dataAreLoading = (bool) => ({
  type: "DATA_ARE_LOADING",
  isLoading: bool,
});

export const filterData = (payload) => ({
  type: "FITLER_DATA",
  payload,
});

export function sortAndSearchData(param, data) {
  return (dispatch) => {
    const { sortOrder, sortColumn, inputValue } = param;

    let filteredPrizes = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    if (sortOrder) {
      const sortedAsc = filteredPrizes.sort((a, b) =>
        isNaN(a[sortColumn] * 1 + b[sortColumn] * 1)
          ? a[sortColumn]?.toString().localeCompare(b[sortColumn]?.toString())
          : +a[sortColumn] - +b[sortColumn]
      );
      filteredPrizes = sortedAsc;
    }
    if (!sortOrder) {
      const sortedDesc = filteredPrizes.sort((a, b) =>
        isNaN(a[sortColumn] * 1 + b[sortColumn] * 1)
          ? b[sortColumn]?.toString().localeCompare(a[sortColumn]?.toString())
          : +b[sortColumn] - +a[sortColumn]
      );
      filteredPrizes = sortedDesc;
    }

    dispatch(filterData(filteredPrizes));
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(dataAreLoading(true));
    api
      .getAllPeople()
      .then((response) => dispatch(fetchDataSuccess(response)))
      .catch(() => dispatch(dataHaveError(true)));
  };
}
