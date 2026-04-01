interface HeaderSwitcherProps {
    header: React.ReactNode;
}

export const HeaderSwitcher: React.FunctionComponent<HeaderSwitcherProps> = ({header}) => {
    return <>{header}</>;
}