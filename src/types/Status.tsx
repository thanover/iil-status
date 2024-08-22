// import { Integration } from "./Integrations";
// import { env } from "./Envs";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type Status = "FAILED" | "PASSED" | "LOADING";

export type StatusDetails = {
  status: Status;
  returnedCode?: number;
  request?: AxiosRequestConfig;
  response?: AxiosResponse;
};

export function getStatusFromCode(statusCode: 400 | 500 | 200 | "LOADING") {
  return statusCode === "LOADING"
    ? statusCode
    : statusCode === 200
    ? "PASSED"
    : "FAILED";
}

export function getStatusSymbol(status: Status) {}

export function getEmptyStatusHistory() {
  const statusHistory: StatusDetails[] = [];
  for (let index = 0; index < 6; index++) {
    statusHistory.push({ status: "LOADING" });
  }
  return statusHistory;
}

export function getStatusCellBackgroundColor(statusDetails: StatusDetails) {
  switch (statusDetails.status) {
    case "LOADING":
      return "bg-neutral-400";

    case "FAILED":
      return "bg-red-600";

    case "PASSED":
      return "bg-green-600";
  }
}
