import { getStatusCellBackgroundColor, StatusDetails } from "../types/Status";

export function StatusHistory(props: { statusHistory: StatusDetails[] }) {
  return (
    <div className="flex flex-row">
      {props.statusHistory.map((statusDetails) => (
        <div className="flex flex-col justify-center">
          <div
            className={`h-4 ml-1 w-2 rounded ${getStatusCellBackgroundColor(
              statusDetails
            )}`}
          ></div>
        </div>
      ))}
    </div>
  );
}
