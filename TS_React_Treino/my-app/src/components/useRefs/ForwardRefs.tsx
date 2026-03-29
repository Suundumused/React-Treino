import { forwardRef } from "react";


export const ForwardRefs = forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} />
));