function MyButton(props) {
    return <button onClick={props.event}>{props.text}</button>;
}

export default MyButton;