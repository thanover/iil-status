import { Integration } from "./Integrations";
import { Env } from "./Envs";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import LoadingIcons from "react-loading-icons";

export type StatusReport = {
  [index in Integration]: IntegrationStatus;
};

export type IntegrationStatus = {
  [index in Env]: IntEnvStatus;
};

export type IntEnvStatus = { ingress: Status; egress: Status };

export type Status = "FAILED" | "PASSED" | "LOADING";

export type StatusDetails = {
  returnedCode: number;
  request?: AxiosRequestConfig;
  response?: AxiosResponse;
};

export function getStatusSymbol(statusCode: number | "LOADING") {
  const status =
    statusCode === "LOADING"
      ? statusCode
      : statusCode === 200
      ? "PASSED"
      : "FAILED";
  switch (status) {
    case "LOADING":
      return <LoadingIcons.Rings height="24" />;

    case "FAILED":
      return "❌";

    case "PASSED":
      return "✅";
  }
}
