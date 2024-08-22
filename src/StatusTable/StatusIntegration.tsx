import { StatusCell } from "./StatusCell";
// import { Envs } from "../types/Envs";

interface StatusRowProps {
  integration: string;
  shouldRefresh: any;
}

export function StatusIntegration(props: StatusRowProps) {
  return (
    <></>
    // <div className={rowClassName}>
    //   <div className={cellClassName}>{props.integration}</div>
    //   {Envs.map((env) => (
    //     <div className={cellClassName}>
    //       <StatusCell
    //         integration={props.integration}
    //         env={env}
    //         shouldRefresh={props.shouldRefresh}
    //         ingressEgress={"ingress"}
    //       />
    //       <StatusCell
    //         integration={props.integration}
    //         env={env}
    //         shouldRefresh={props.shouldRefresh}
    //         ingressEgress={"egress"}
    //       />
    //     </div>
    //   ))}
    // </div>
  );
}
