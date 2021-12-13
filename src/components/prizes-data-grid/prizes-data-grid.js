import React from "react";
import { Flex } from "@chakra-ui/react";
import ErrorIndicator from "../error-indicator";
import PrizesDataGridItem from "../prizes-data-grid-item";

const PrizesDataGrid = ({ prizesData, error }) => {
  if(error) {
  return  <ErrorIndicator/>
  }
  const elements = prizesData.map((item) => {
    const { pk, ...itemProps } = item;
    return (
      <Flex
        key={pk}
        className="table__row"
        align="center"
        justify="center"
        textAlign={"center"}
        borderBottom="1px solid rgba(224, 224, 224, 1)"
        color="rgb(49, 47, 47)"
      >
        <PrizesDataGridItem {...itemProps} />
      </Flex>
    );
  });
  return  <Flex className="table__row_wrapper" direction="column">{elements}</Flex>;
};

export default PrizesDataGrid;
