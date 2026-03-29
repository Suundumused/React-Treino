import { memo } from "react";

type ButtonProps = { label: string };

export const memoTest = memo(function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
});
