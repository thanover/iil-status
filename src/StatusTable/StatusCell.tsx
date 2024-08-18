import React, { useEffect, useState } from "react";
import { StatusDetails, getStatusSymbol } from "../types/Status";
import { Env } from "../types/Envs";
import { AxiosClient } from "../httpCheck/axiosClient";
import { StatusHistory } from "./statusHistory";

interface StatusCellProps {
  integration: string;
  env: Env;
  shouldRefresh: any;
  ingressEgress: "ingress" | "egress";
}

export function StatusCell(props: StatusCellProps) {
  const [currentStatus, setStatus] = useState<400 | 500 | 200 | "LOADING">(
    "LOADING"
  );
  const [statusHistory, setStatusHistory] = useState<StatusDetails[]>([]);

  useEffect(() => {
    console.log("useEffect has been called");
    const previousStatus = currentStatus;
    if (previousStatus !== "LOADING")
      statusHistory.push({ returnedCode: previousStatus });
    if (statusHistory.length > 5) {
      statusHistory.shift();
    }
    setStatusHistory(statusHistory);

    async function GetCurrentStatus() {
      const axiosClient = new AxiosClient("https://google.com");
      const response = await axiosClient.makeRandomCall();
      return response;
    }
    setStatus("LOADING");
    GetCurrentStatus().then((status) => {
      setStatus(status);
    });
  }, [
    props.shouldRefresh,
    setStatus,
    setStatusHistory,
    statusHistory,
    currentStatus,
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {props.ingressEgress}: {getStatusSymbol(currentStatus)}
      </div>
      {statusHistory.length > 0 && (
        <StatusHistory statusHistory={statusHistory} />
      )}
    </div>
  );
}
