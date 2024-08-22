export const devEnvs = ["bsidev1", "bsitest1", "bsicsttst1"] as const;
export type DevEnv = (typeof devEnvs)[number];

export const moEnvs = ["bsimo1", "bsiperf3"] as const;
export type MoEnv = (typeof moEnvs)[number];

export const highLevelEnvs = ["mo", "dev"] as const;
export type HighLevelEnv = (typeof highLevelEnvs)[number];

export const envs: { [index in HighLevelEnv]: any } = {
  mo: [moEnvs],
  dev: [devEnvs],
};

// export type Envs = {
//   [index in HighLevelEnv]: (index extends "dev" ? DevEnv : MoEnv)[];
// };
// export const envs: Envs = {
//   dev: DevEnvs,
//   mo: MoEnvs,
// };
