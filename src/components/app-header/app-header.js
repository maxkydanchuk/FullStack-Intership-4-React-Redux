import { React } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

const AppHeader = ({ onSortChange, sortOrder }) => {

  // function getArrows(order) {
  //   if (order) {
  //     return <ArrowUpIcon />;
  //   }
  //   if (!order) {
  //     return <ArrowDownIcon />;
  //   } else {
  //     return <ArrowUpDownIcon />;
  //   }
  // }

  const buttons = [
    { name: "name", label: "Name"},
    { name: "birthYear", label: "Birth Year"},
    { name: "gender", label: "Gender"},
    { name: "eyeColor", label: "Eye Color"},
    { name: "height", label: "Height"},
  ];

  const Boxes = buttons.map(({ name, label }) => {
    return (
      <Box
        key={name}
        className="table__header_year"
        onClick={() => onSortChange(name, sortOrder)}
        flex="2"
        cursor="pointer"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        {label}  {sortOrder ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Box>
    );
  });

  return (
    <Flex
      className="table__header"
      align="center"
      borderBottom="1px solid rgba(224, 224, 224, 1)"
      fontWeight="bold"
      textAlign={"center"}
      h="20"
    >
      {Boxes}
    </Flex>
  );
};

export default AppHeader;
