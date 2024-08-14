import React from "react";
import { IntEnvStatus, Status } from "../types/Status";

interface StatusRowProps {
  status: IntEnvStatus;
}

export class StatusCell extends React.Component<StatusRowProps> {
  render() {
    return (
      <div className="hcsContainer">
        <div className="hcsIngressStatus">
          Ingress: {getStatusSymbol(this.props.status.ingress)}
        </div>
        <div className="hcsEgressStatus">
          Engress: {getStatusSymbol(this.props.status.egress)}
        </div>
      </div>
    );
  }
}

function getStatusSymbol(status: Status) {
  switch (status) {
    case "IN_PROGRESS":
      return "🔎";

    case "FAILED":
      return "❌";

    case "PASSED":
      return "✅";
  }
}
