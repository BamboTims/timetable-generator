import { useEffect, useState } from "react";
import { getAllTables } from "../../utils/utils";
import {
  ListHeading,
  TableLists,
  TableListItem,
  TableListLink,
  NoTableText,
} from "./ModalTableList.styles";

const ModalTableList = () => {
  const [allTables, setAllTables] = useState([]);

  useEffect(() => {
    const savedTables = getAllTables();
    if (savedTables.length !== 0) return setAllTables(savedTables);
  }, []);

  if (allTables.length > 0)
    return (
      <>
        <ListHeading>Tables Saved</ListHeading>
        <TableLists>
          {allTables.map((table) => {
            return (
              <TableListItem key={table.id}>
                <TableListLink to={`/table/${table.id}`}>
                  {table.name}
                </TableListLink>
              </TableListItem>
            );
          })}
        </TableLists>
      </>
    );

  return <NoTableText>{allTables.length} Tables Found!</NoTableText>;
};

export default ModalTableList;
