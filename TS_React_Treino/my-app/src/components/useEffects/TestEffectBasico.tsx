import { useEffect } from "react";

function TestEffectBasico() {
  useEffect(() => {
    console.log("montou");
  }, []);
  return <div />;
}

export default TestEffectBasico;