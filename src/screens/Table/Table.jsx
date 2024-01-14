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
import { Box } from "@mui/material";
import { getTable, makeCsvData, saveTable } from "../../utils/utils";
import NavBar from "../../Components/Nav/nav";
import ModalPortal from "../../Components/Modal/Modal";
import { SubmitButton } from "../../Components/Modal/ModalForm.styles";
import { FormInput } from "../../Components/FormInput/FormInput";
import { useLocation, useParams } from "react-router-dom";

const bodyWidth = outerWidth;

const TableScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const { courses, venues, setCourses, setVenues } = useCourses();
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState("");

  const { id } = useParams();
  const location = useLocation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleSave = () => {
    saveTable(tableName, dataList, courses, venues);
    handleClose();
  };

  useEffect(() => {
    if (!id) return;
    const { table: timetable, courses, venues } = getTable(id);
    setCourses(courses);
    setVenues(venues);
    setDataList(timetable);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    if (location.pathname !== "/create/new") return;
    const timetable = createTimeTable(courses, venues);
    const transformedTimeTable = transformTimeTable(timetable, times, venues);
    const spannedTimeTable = spanTimeTableRows(transformedTimeTable);
    setDataList(spannedTimeTable);
    setIsLoading(false);
  }, [courses, venues, location.pathname]);

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
      <NavBar handleDownloadCsv={handleDownloadCsv} handleOpen={handleOpen} />
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
          onClick={() => alert("kk")}
        >
          <HeaderCell>Days</HeaderCell>
          <Cell dataKey="day" onClick={() => alert("kk")} />
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
          align="center"
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
      <ModalPortal open={open} handleClose={handleClose}>
        <Box width="80%" mb={1}>
          <FormInput
            value={tableName}
            changeText={setTableName}
            label="Table name"
            placeholder="Enter table name"
          />
        </Box>
        <SubmitButton onClick={handleSave}>Save</SubmitButton>
      </ModalPortal>
    </>
  );
};

export default TableScreen;
