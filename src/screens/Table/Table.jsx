import { useEffect, useState } from "react";
import { useCourses } from "../../Context/Course.context";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Placeholder } from "rsuite";
import "rsuite-table/dist/css/rsuite-table.css";
import "rsuite/dist/rsuite.min.css";
import {
  createTimeTable,
  spanTimeTableRows,
  times,
  transformTimeTable,
} from "../../test/testData";
import { makeCsvData } from "../../utils/utils";
import NavBar from "../../Components/Nav/nav";
const bodyWidth = outerWidth;

const TableScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const { courses, venues } = useCourses();

  const downloadAsCsv = (columns, data, filename) => {
    const csvData = makeCsvData(columns, data);
    const csvFile = new Blob([csvData], { type: "text/csv" });
    const downloadLink = document.createElement("a");

    downloadLink.display = "none";
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDownloadCsv = () => {
    const columns = [
      { accessor: (item) => item.day, name: "Day" },
      { accessor: (item) => item[8], name: "8:00 - 9:00" },
      { accessor: (item) => item[9], name: "9:00 - 10:00" },
      { accessor: (item) => item[10], name: "10:00 - 11:00" },
      { accessor: (item) => item[11], name: "11:00 - 12:00" },
      { accessor: (item) => item[12], name: "12:00 - 13:00" },
      { accessor: (item) => item[13], name: "13:00 - 14:00" },
      { accessor: (item) => item[14], name: "14:00 - 15:00" },
      { accessor: (item) => item[15], name: "15:00 - 16:00" },
      { accessor: (item) => item[16], name: "16:00 - 17:00" },
      { accessor: (item) => item[17], name: "17:00 - 18:00" },
    ];

    downloadAsCsv(columns, dataList, "table");
  };

  useEffect(() => {
    const timetable = createTimeTable(courses, venues);
    const transformedTimeTable = transformTimeTable(timetable, times, venues);
    const spannedTimeTable = spanTimeTableRows(transformedTimeTable);
    console.log(spannedTimeTable);
    setDataList(spannedTimeTable);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#fff",
          padding: 20,
          zIndex: 1,
        }}
      >
        <Placeholder.Grid rows={20} columns={6} active />
      </div>
    );
  }

  return (
    <>
      <NavBar handleDownloadCsv={handleDownloadCsv} />
      <Table
        data={dataList}
        autoHeight={true}
        cellBordered
        affixHeader
        loading={isLoading}
        loadAnimation={isLoading}
      >
        <Column
          width={0.15 * bodyWidth}
          verticalAlign="top"
          fullText
          fixed
          rowSpan={(rowData) => rowData.rowspan + 1}
        >
          <HeaderCell>Days</HeaderCell>
          <Cell dataKey="day" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>8:00 - 9:00</HeaderCell>
          <Cell dataKey="8" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>9:00 - 10:00</HeaderCell>
          <Cell dataKey="9" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>10:00 - 11:00</HeaderCell>
          <Cell dataKey="10" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>11:00 - 12:00</HeaderCell>
          <Cell dataKey="11" />
        </Column>

        <Column
          width={0.15 * bodyWidth}
          verticalAlign="middle"
          align="middle"
          fullText
        >
          <HeaderCell>12:00 - 13:00</HeaderCell>
          <Cell dataKey="12" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>13:00 - 14:00</HeaderCell>
          <Cell dataKey="13" rowSpan={(rowData) => rowData.rowspan + 1} />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>14:00 - 15:00</HeaderCell>
          <Cell dataKey="14" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>15:00 - 16:00</HeaderCell>
          <Cell dataKey="15" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>16:00 - 17:00</HeaderCell>
          <Cell dataKey="16" />
        </Column>

        <Column width={0.15 * bodyWidth} verticalAlign="middle" fullText>
          <HeaderCell>17:00 - 18:00</HeaderCell>
          <Cell dataKey="17" />
        </Column>
      </Table>
    </>
  );
};

export default TableScreen;
