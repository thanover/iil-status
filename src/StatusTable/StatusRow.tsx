import React from "react";
import { StatusCell } from "./StatusCell";
import { cellClassName, rowClassName } from "./commonClassNames";
import { IntegrationStatus } from "../types/Status";
import { Envs } from "../types/Envs";
import { Integration } from "../types/Integrations";
import { AxiosClient } from "../httpCheck/axiosClient";

interface StatusRowProps {
  integration: string;
  shouldRefresh: any;
  axiosClient: AxiosClient;
}

export function StatusRow(props: StatusRowProps) {
  return (
    <div className={rowClassName}>
      <div className={cellClassName}>{props.integration}</div>
      {Envs.map((env) => (
        <div className={cellClassName}>
          <StatusCell
            axiosClient={props.axiosClient}
            integration={props.integration}
            env={env}
            shouldRefresh={props.shouldRefresh}
          />
        </div>
      ))}
    </div>
  );
}
