import React from "react";
import { StatusTableHeader } from "./StatusTableHeader";
import { StatusRow } from "./StatusRow";
import { StatusReport } from "../types/Status";
import { Integrations } from "../types/Integrations";

const status: StatusReport = {
  "001": {
    bsidev1: { ingress: "IN_PROGRESS", egress: "PASSED" },
    bsitest1: { ingress: "PASSED", egress: "PASSED" },
    bsicsttst1: { ingress: "PASSED", egress: "PASSED" },
  },
  "006": {
    bsidev1: { ingress: "PASSED", egress: "PASSED" },
    bsitest1: { ingress: "FAILED", egress: "PASSED" },
    bsicsttst1: { ingress: "PASSED", egress: "PASSED" },
  },
  "009": {
    bsidev1: { ingress: "PASSED", egress: "PASSED" },
    bsitest1: { ingress: "PASSED", egress: "PASSED" },
    bsicsttst1: { ingress: "PASSED", egress: "FAILED" },
  },
};

export class StatusTable extends React.Component {
  render() {
    return (
      <div>
        <StatusTableHeader />
        {Integrations.map((integration) => (
          <StatusRow
            integrationId={integration}
            integrationStatus={status[integration]}
          />
        ))}
      </div>
    );
  }
}
