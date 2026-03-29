import { useRef } from "react";


export default function UseRefsTest() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focar</button>
    </>
  );
}