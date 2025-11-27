import { MaterialReactTable } from "material-react-table";
import PropTypes from "prop-types";

const WithMaterialReactTable = ({
  column,
  data,
  renderRowActionMenuItems = null,
  enableRowActions = true,
  renderRowActions = null,
  initialState = {},
}) => {
  return (
    <>
      <MaterialReactTable
        columns={column}
        data={data}
        enableGrouping={true}
        groupedColumnMode
        enableRowActions={enableRowActions}
        renderRowActions={renderRowActions}
        enableStickyHeader={true}
        renderRowActionMenuItems={renderRowActionMenuItems}
        muiTableHeadCellProps={({ column }) => {
          if (column.id === "mrt-row-actions") {
            return {
              sx: {
                textTransform: "uppercase",
              },
            };
          }
          return {};
        }}
        muiPaginationProps={{
          color: "secondary",
          rowsPerPageOptions: [10, 20, 30],
          shape: "rounded",
          variant: "outlined",
        }}
        muiTableBodyCellProps={({ column }) => {
          if (column.id === "mrt-row-actions") {
            return {
              sx: {
                "& .MuiSvgIcon-root": {
                  fontSize: "25px",
                },
              },
            };
          }
          return {};
        }}
        state={true}
        initialState={{
          showColumnFilters: true,
          state: true,
          density: "compact",
          showGlobalFilter: false,
          columnPinning: {
            left: ["mrt-row-expand", "mrt-row-select", "mrt-row-actions"],
          },
            ...initialState,
        }}
      />
    </>
  );
};

WithMaterialReactTable.propTypes = {
  column: PropTypes.array,
  data: PropTypes.array,
  renderRowActionMenuItems: PropTypes.any,
  renderRowActions: PropTypes.any,
  enableRowActions: PropTypes.any,
};

export { WithMaterialReactTable };
