import type { CSSProperties } from "react";

const style: CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const Loading = () => {
  return <div style={style} role="status" aria-label="Carregando" />;
};

export default Loading;
