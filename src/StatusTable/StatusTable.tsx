import React, { useState } from "react";
import { StatusTableHeader } from "./StatusTableHeader";
import { StatusRow } from "./StatusRow";
import { Integrations } from "../types/Integrations";

export function StatusTable() {
  const [refresh, setShouldRefresh] = useState(0);

  const onClick = () => {
    setShouldRefresh(refresh + 1);
  };

  return (
    <div className="text-slate-300">
      <div className="m-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500"
          onClick={onClick}
        >
          Refresh Status
        </button>
      </div>
      <div>
        <StatusTableHeader />
        {Integrations.map((integration) => (
          <StatusRow integration={integration} shouldRefresh={refresh} />
        ))}
      </div>
    </div>
  );
}
