type UserProps = { name: string };

function User({ name }: UserProps) {
  return <p>{name}</p>;
}

export default User;