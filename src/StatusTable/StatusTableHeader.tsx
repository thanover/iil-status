import React from "react";
import { cellClassName, rowClassName } from "./commonClassNames";
import { Envs } from "../types/Envs";

export function StatusTableHeader() {
  return (
    <div className={rowClassName}>
      <div className={cellClassName}></div>
      {Envs.map((env) => (
        <div className={cellClassName}>{env}</div>
      ))}
    </div>
  );
}
