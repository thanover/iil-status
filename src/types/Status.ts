import { Integration } from "./Integrations";
import { Env } from "./Envs";

export type StatusReport = {
  [index in Integration]: IntegrationStatus;
};

export type IntegrationStatus = {
  [index in Env]: IntEnvStatus;
};

export type IntEnvStatus = { ingress: Status; egress: Status };

export type Status = "FAILED" | "PASSED" | "LOADING";
