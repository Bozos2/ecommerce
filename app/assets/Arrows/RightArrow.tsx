import * as React from "react";
import { SVGProps } from "react";

const RightArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0369a1"
      viewBox="0 0 24 24"
      height={32}
      width={32}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 7 5 5-5 5"
      />
    </svg>
  );
};
export default RightArrow;
