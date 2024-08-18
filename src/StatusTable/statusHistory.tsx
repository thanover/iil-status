import { getStatusSymbol, StatusDetails } from "../types/Status";

export function StatusHistory(props: { statusHistory: StatusDetails[] }) {
  return (
    <div className="flex flex-row">
      {props.statusHistory.map((statusDetails) => (
        <div>{getStatusSymbol(statusDetails.returnedCode)}</div>
      ))}
    </div>
  );
}
