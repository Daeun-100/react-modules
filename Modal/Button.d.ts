type ButtonProps = {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    border?: string;
};
declare const Button: ({ title, backgroundColor, textColor, size, border, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
