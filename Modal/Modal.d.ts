type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: 'center' | 'bottom';
};
declare const Modal: {
    ({ isOpen, onClose, children, position, }: ModalProps): import("react/jsx-runtime").JSX.Element;
    Title: ({ title }: ModalTitleProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: () => import("react/jsx-runtime").JSX.Element;
    Contents: ({ children }: ModalContentsProps) => import("react/jsx-runtime").JSX.Element;
    Button: ({ title, backgroundColor, textColor, size, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
};
interface ModalTitleProps {
    title: string;
}
interface ModalContentsProps {
    children: React.ReactNode;
}
type ButtonProps = {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
};
export default Modal;
