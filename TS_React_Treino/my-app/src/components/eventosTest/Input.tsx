function Input() {
  return (
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        console.log(e.target.value)
      }
    />
  );
}

export default Input;