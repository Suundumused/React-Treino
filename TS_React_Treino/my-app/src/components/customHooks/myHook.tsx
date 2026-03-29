import { useState } from "react";


export default function useToggle(): [boolean, () => void] {
  const [on, setOn] = useState(false);
  return [on, () => setOn(!on)];
}