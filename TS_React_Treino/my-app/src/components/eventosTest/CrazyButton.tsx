function CrazyButton() {
    return <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(e)}>OK</button>;
}

export default CrazyButton;