import React from "react";
import { StatusCell } from "./StatusCell";
import { cellClassName, rowClassName } from "./commonClassNames";
import { IntegrationStatus } from "../types/Status";
import { Envs } from "../types/Envs";

interface StatusRowProps {
  integrationId: string;
  integrationStatus: IntegrationStatus;
}

export class StatusRow extends React.Component<StatusRowProps> {
  render() {
    return (
      <div className={rowClassName}>
        <div className={cellClassName}>{this.props.integrationId}</div>
        {Envs.map((env) => (
          <div className={cellClassName}>
            <StatusCell status={this.props.integrationStatus[env]} />
          </div>
        ))}
      </div>
    );
  }
}
