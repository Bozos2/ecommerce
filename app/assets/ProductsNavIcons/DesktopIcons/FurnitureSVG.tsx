import * as React from "react";
import { SVGProps } from "react";
const FurnitureSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width="34"
    height="34"
    {...props}
  >
    <path
      d="M3 2C2 2 1 3 1 4c2 0 3 1.576 3 3h6c0-1.518 1-3 3-3 0-1-1-2-2-2zM1 5C0 5 0 6 0 6c0 .518.482 1 1 1v3c0 .645.423 1 1 1h.5s0 1 1 1 1-1 1-1h5s0 1 1 1 1-1 1-1h.5c.51 0 1-.484 1-1V7c.495 0 1-.388 1-1 0 0 0-1-1-1s-2 1-2 3H3c0-2-1-3-2-3z"
      style={{
        fill: "#0369a1",
        fillOpacity: 1,
        stroke: "none",
      }}
    />
  </svg>
);
export default FurnitureSVG;
