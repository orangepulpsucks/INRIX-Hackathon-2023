import { useState, useEffect } from "react";

type ConnectionStatus = -1 | 0 | 1;

// typescript enums are bad
const CONNECTION = {
  OK: 1 as const,
  ISSUE: 0 as const,
  DOWN: -1 as const,
};

function getConnectionClass(status: ConnectionStatus): string {
  switch (status) {
    case CONNECTION.OK:
      return "text-green-400";
    case CONNECTION.ISSUE:
      return "text-orange-400";
    case CONNECTION.DOWN:
    default:
      return "text-red-400";
  }
}

function getConnectionText(status: ConnectionStatus): string {
  switch (status) {
    case CONNECTION.OK:
      return "OK";
    case CONNECTION.ISSUE:
      return "Issue";
    case CONNECTION.DOWN:
    default:
      return "Down";
  }
}

interface TetherProps {
  className: string | undefined;
}

export default function Tether({ className }: TetherProps) {
  const [connected, setConnected] = useState<ConnectionStatus>(CONNECTION.DOWN);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch("/api");
        if (response.ok) {
          setConnected(CONNECTION.OK);
          console.log(response);
        } else {
          setConnected(CONNECTION.ISSUE);
        }
      } catch (error) {
        setConnected(CONNECTION.DOWN);
      }
    };

    checkConnection();
  }, []);

  const connectionClass = getConnectionClass(connected);
  const connectionText = getConnectionText(connected);

  return (
    <div className={`${connectionClass} ${className ? className : ""}`}>
      Connection to 🚂 Express Server: {connectionText.toLocaleUpperCase()}
    </div>
  );
}
