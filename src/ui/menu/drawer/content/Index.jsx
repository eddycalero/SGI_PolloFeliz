import Navigation from "./navigate";
import { SimpleBarScroll } from "../../../../components";

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  return (
    // <SimpleBarScroll
    //   sx={{
    //     "& .simplebar-content-wrapper": {
    //       display: "flex",
    //       flexDirection: "column",
    //     },
    //   }}
    // >
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <Navigation />
    </div>
    // </SimpleBarScroll>
  );
};

export default DrawerContent;
