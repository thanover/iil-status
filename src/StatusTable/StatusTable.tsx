import React, { useState } from "react";
import { Integrations } from "../types/Integrations";
import { DevEnv, envs, highLevelEnvs, MoEnv } from "../types/Envs";
import { StatusCell } from "./StatusCell";

export const ingressEgress = ["ingress", "egress"] as const;
export type IngressEgress = (typeof ingressEgress)[number];

export function StatusTable() {
  const [shouldRefresh, setShouldRefresh] = useState(0);

  const onClick = () => {
    setShouldRefresh(shouldRefresh + 1);
  };

  return (
    <div className="text-slate-300">
      <div className="m-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-1"
          onClick={onClick}
        >
          Refresh Status
        </button>
      </div>
      <div>
        {Integrations.map((integration) => (
          /* Integration */
          <div className="flex flex-row rounded m-2 ">
            <div className="flex flex-col w-8">
              <div className="pt-1 text-sm">{integration}</div>
              <div className="pt-1 text-sm">A1</div>
            </div>
            <div className="flex flex-row">
              {highLevelEnvs.map((highLevelEnv) => (
                /* High Level Env Container */
                <div className="flex flex-col pb-1 pl-1 m-0 text-sm rounded">
                  <div className="flex flex-row">
                    {/* Low Level Env Container */}
                    {envs[highLevelEnv].map((_envs: DevEnv[] | MoEnv[]) =>
                      _envs.map((env: DevEnv | MoEnv) => (
                        <div className="flex flex-row bg-slate-800 border border-slate-700 mr-1 rounded">
                          <div className="rotate_container text-[10px] p-2 justify-center">
                            <div className="rotate_div">{env}</div>
                          </div>
                          <div>
                            {ingressEgress.map((ingressEgress) => (
                              <StatusCell
                                integration={integration}
                                env={env}
                                shouldRefresh={shouldRefresh}
                                ingressEgress={ingressEgress}
                              />
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
