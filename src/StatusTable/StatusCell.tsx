import { useEffect, useState } from "react";
import {
  StatusDetails,
  getEmptyStatusHistory,
  getStatusCellBackgroundColor,
  getStatusFromCode,
} from "../types/Status";
import { DevEnv, MoEnv } from "../types/Envs";
import { AxiosClient } from "../httpCheck/axiosClient";
import { StatusHistory } from "./statusHistory";
import { ImUpload, ImDownload } from "react-icons/im";

interface StatusCellProps {
  integration: string;
  env: DevEnv | MoEnv;
  shouldRefresh: any;
  ingressEgress: "ingress" | "egress";
}

export function StatusCell(props: StatusCellProps) {
  const [currentStatus, setCurrentStatus] = useState<StatusDetails>({
    status: "LOADING",
  });
  const [statusHistory, setStatusHistory] = useState<StatusDetails[]>(
    getEmptyStatusHistory()
  );

  useEffect(() => {
    console.log("useEffect has been called");
    const previousStatus = currentStatus;
    if (previousStatus.status !== "LOADING") statusHistory.push(previousStatus);
    if (statusHistory.length > 5) {
      statusHistory.shift();
    }
    setStatusHistory(statusHistory);

    async function GetCurrentStatus() {
      const axiosClient = new AxiosClient("https://google.com");
      const response = await axiosClient.makeRandomCall();
      return response;
    }
    setCurrentStatus({
      status: "LOADING",
    });
    GetCurrentStatus().then((statusCode) => {
      setCurrentStatus({
        status: getStatusFromCode(statusCode),
        returnedCode: statusCode,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.shouldRefresh]);

  return (
    <div className="flex flex-row text-xs mr-1">
      <div className="h-[20px] w-6">
        <div className="text-sm p-2">
          {props.ingressEgress === "ingress" ? <ImDownload /> : <ImUpload />}
        </div>
      </div>
      <div className="flex flex-row pr-2 justify-center align-middle">
        <div
          className={`flex flex-row p-1 m-1 rounded w-[55px] text-[10px] justify-center align-center ${getStatusCellBackgroundColor(
            currentStatus
          )}`}
        >
          {currentStatus.status}
        </div>
        {statusHistory.length > 0 && (
          <StatusHistory statusHistory={statusHistory} />
        )}
      </div>
    </div>
  );
}
