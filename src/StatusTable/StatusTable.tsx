import React, { useState } from "react";
import { StatusTableHeader } from "./StatusTableHeader";
import { StatusRow } from "./StatusRow";
import { StatusReport } from "../types/Status";
import { Integrations } from "../types/Integrations";
import { getLoadingStatus } from "../httpCheck/loadingStatus";
import { AxiosClient } from "../httpCheck/axiosClient";

const axiosClient = new AxiosClient("https://httpstat.us/");

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
          <StatusRow
            integration={integration}
            shouldRefresh={refresh}
            axiosClient={axiosClient}
          />
        ))}
      </div>
    </div>
  );
}
