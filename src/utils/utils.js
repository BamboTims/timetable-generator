import { v4 as uuidv4 } from "uuid";

const tableLocation = "@table";

const escapeCsvCell = (cell) => {
  if (cell == null) {
    return "";
  }
  const sc = cell.toString().trim();
  if (sc === "" || sc === '""') {
    return sc;
  }
  if (
    sc.includes('"') ||
    sc.includes(",") ||
    sc.includes("\n") ||
    sc.includes("\r")
  ) {
    return '"' + sc.replace(/"/g, '""') + '"';
  }
  return sc;
};

const makeCsvData = (columns, data) => {
  return data.reduce((csvString, rowItem) => {
    return (
      csvString +
      columns
        .map(({ accessor }) => escapeCsvCell(accessor(rowItem)))
        .join(",") +
      "\r\n"
    );
  }, columns.map(({ name }) => escapeCsvCell(name)).join(",") + "\r\n");
};

const getAllTables = () => {
  const allTables = JSON.parse(localStorage.getItem(tableLocation));
  return allTables ?? [];
};

const saveTable = (name, table, courses, venues) => {
  const savedTables = JSON.parse(localStorage.getItem(tableLocation)) ?? [];
  const id = uuidv4();

  if (savedTables.find((el) => el.name === name))
    return alert(`The ${name} table has already been saved`);

  const allTables = [...savedTables, { name, id }];

  localStorage.setItem(tableLocation, JSON.stringify(allTables));
  localStorage.setItem(id, JSON.stringify({ table, courses, venues }));

  alert(`${name} has been saved successfully`);
};

const getTable = (id) => {
  return JSON.parse(localStorage.getItem(id));
};

export { makeCsvData, getAllTables, saveTable, getTable };
