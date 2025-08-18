import { Outlet } from "react-router-dom";
import { RingSpinnerOverlay } from "react-spinner-overlay";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
 
    <Outlet />
  </>
);

export { MinimalLayout };
