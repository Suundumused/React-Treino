import { useState } from "react";

export default function Form() {
  const [text, setText] = useState<string>("");
  return (
    <input
      value={text}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value)
      }
    />
  );
}