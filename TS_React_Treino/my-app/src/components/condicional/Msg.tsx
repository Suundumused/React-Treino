type MsgProps = { ok?: boolean };

function Msg({ ok = true }: MsgProps) {
  return ok ? <p>Sim</p> : <p>Não</p>;
}

export default Msg;