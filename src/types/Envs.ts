export const Envs = ["bsidev1", "bsitest1", "bsicsttst1"] as const;
export type Env = (typeof Envs)[number];
