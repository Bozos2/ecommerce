import * as React from "react";
import { SVGProps } from "react";
const WallDecorSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#0369a1"
    stroke="#0369a1"
    viewBox="0 0 256 256"
    width={34}
    height={34}
    {...props}
  >
    <path d="M224 44H32a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM92 140v-24h72v24Zm-48 0v-24h24v24Zm144-24h24v24h-24Zm24-24h-72V68h72Zm-96-24v24H44V68Zm-72 96h72v24H44Zm96 24v-24h72v24Z" />
  </svg>
);
export default WallDecorSVG;
