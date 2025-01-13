import { MoreVertSharp } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Column, Data } from "../../data/global/TableSampleData";

interface CustomTableProps {
  columns: Column[];
  data: Data[];
  sortBy: keyof Data;
  orderDir: "asc" | "desc";
  actionOnClick?: () => void;
  selectedItems: (selected: number[]) => void;
}

export const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  sortBy,
  orderDir,
  actionOnClick,
  selectedItems,
}) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">(orderDir);
  const [orderBy, setOrderBy] = useState<keyof Data>(sortBy);

  useEffect(() => {
    if (selected) selectedItems(selected);
  }, [selected, selectedItems]);

  const handleSelect = (id: number) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id],
    );
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(data.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSort = (column: keyof Data) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          backgroundColor: "#f5f5f5", // Cambia el color de fondo al pasar el mouse
          borderRadius: "15px 15px 0 0 ",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < data.length
                }
                checked={selected.length === data.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell key={column.field}>
                {column.sortable ? (
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : "asc"}
                    onClick={() => handleSort(column.field)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: "#fff", // Cambia el color de fondo al pasar el mouse
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Cambia el color de fondo al pasar el mouse
                },
              }}
            >
              <TableCell
                padding="checkbox"
                sx={{
                  padding: "4px 8px", // Reduce el padding
                }}
              >
                <Checkbox
                  checked={selected.includes(row.id)}
                  onChange={() => handleSelect(row.id)}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    padding: "4px 8px", // Reduce el padding
                  }}
                >
                  {column.field === "estado" ? (
                    <Box
                      sx={{
                        display: "inline-block",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor:
                          row.estado === "Pendiente"
                            ? "#FFF8E1"
                            : row.estado === "Aprobado"
                              ? "#E8F5E9"
                              : "#FFEBEE",
                        color:
                          row.estado === "Pendiente"
                            ? "#F9A825"
                            : row.estado === "Aprobado"
                              ? "#2E7D32"
                              : "#C62828",
                        border: `1px solid ${
                          row.estado === "Pendiente"
                            ? "#F9A825"
                            : row.estado === "Aprobado"
                              ? "#2E7D32"
                              : "#C62828"
                        }`,
                        textAlign: "center",
                      }}
                    >
                      {row.estado}
                    </Box>
                  ) : (
                    row[column.field]
                  )}
                </TableCell>
              ))}
              <TableCell
                sx={{
                  padding: "4px 8px", // Reduce el padding
                }}
                onClick={actionOnClick}
              >
                <IconButton color="secondary">
                  <MoreVertSharp />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="standard"
        shape="rounded"
      />
    </Box>
  );
};

export const CustomBasicTable: React.FC<CustomTableProps> = ({
  columns,
  data,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "15px 15px 0 0 ",
        backgroundColor: "#f5f5f5", // Cambia el color de fondo al pasar el mouse
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>column.label</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: "#fff", // Cambia el color de fondo al pasar el mouse
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Cambia el color de fondo al pasar el mouse
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    padding: "4px 8px",
                  }}
                >
                  {row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
