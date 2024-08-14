export const Integrations = ["001", "006", "009"] as const;
export type Integration = (typeof Integrations)[number];
