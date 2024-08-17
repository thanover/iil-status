import React, { useEffect, useState } from "react";
import { Status } from "../types/Status";
import LoadingIcons from "react-loading-icons";
import { Env } from "../types/Envs";
import { AxiosClient } from "../httpCheck/axiosClient";

interface StatusRowProps {
  axiosClient: AxiosClient;
  integration: string;
  env: Env;
  shouldRefresh: any;
}

export function StatusCell(props: StatusRowProps) {
  const [currentIngressStatus, setIngressStatus] = useState<Status>("LOADING");
  const [currentEgressStatus, setEgressStatus] = useState<Status>("LOADING");
  useEffect(() => {
    setEgressStatus("LOADING");
    setIngressStatus("LOADING");
    GetCurrentStatus(props.axiosClient).then((status) =>
      setIngressStatus(status)
    );
    GetCurrentStatus(props.axiosClient).then((status) =>
      setEgressStatus(status)
    );
  }, [props.shouldRefresh]);

  // const TriggeredFunc = async () => {
  //   setIngressStatus(await GetCurrentStatus(props.axiosClient));
  // };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        Ingress: {getStatusSymbol(currentIngressStatus)}
      </div>
      <div className="flex flex-row">
        Engress: {getStatusSymbol(currentEgressStatus)}
      </div>
    </div>
  );
}

function getStatusSymbol(status: Status) {
  switch (status) {
    case "LOADING":
      return <LoadingIcons.Rings height="24" />;

    case "FAILED":
      return "❌";

    case "PASSED":
      return "✅";
  }
}

async function GetCurrentStatus(axiosClient: AxiosClient) {
  const response = await axiosClient.makeRandomCall();
  if (response === 400 || response === 500) return "FAILED";
  return "PASSED";
}
