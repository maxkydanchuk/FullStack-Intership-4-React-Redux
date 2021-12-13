import React from "react";
import { Box } from "@chakra-ui/react";

const PrizesDataGridItem = ({ name, birthYear, eyeColor, gender, height }) => {
  return (
    <>
      <Box className="table__row_year" flex="2" pt="8" pb="8">
        {name}
      </Box>
      <Box className="table__row_category" flex="2" pt="8" pb="8">
        {birthYear}
      </Box>
      <Box className="table__row_firstname" flex="2" pt="8" pb="8">
        {gender}
      </Box>
      <Box className="table__row_lastname" flex="2" pt="8" pb="8">
      {eyeColor}
      </Box>
      <Box className="table__row_fullname" flex="2" pt="8" pb="8">
        {height}
      </Box>
    </>
  );
};

export default PrizesDataGridItem;
