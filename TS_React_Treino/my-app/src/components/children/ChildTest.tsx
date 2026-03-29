import { ReactNode } from "react";


type CardProps = { children: ReactNode };

function ChildTest({ children }: CardProps) {
  return <div>{children}</div>;
}

export default ChildTest;