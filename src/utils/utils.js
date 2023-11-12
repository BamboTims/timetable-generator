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

export { makeCsvData };
