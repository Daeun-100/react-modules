type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: 'center' | 'bottom';
    size?: 'small' | 'medium' | 'large';
};
type ModalContextType = {
    onClose: () => void;
    children: React.ReactNode;
    position?: 'center' | 'bottom';
};
export declare const ModalContext: import('../../node_modules/react').Context<ModalContextType>;
declare const Modal: {
    ({ isOpen, onClose, children, position, size, }: ModalProps): import("react/jsx-runtime").JSX.Element;
    Title: ({ title }: {
        title: string;
    }) => import("react/jsx-runtime").JSX.Element;
    CloseButton: () => import("react/jsx-runtime").JSX.Element;
    Contents: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    ButtonContainer: ({ position, children, }: {
        position?: "left" | "right" | "center";
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Button: ({ title, backgroundColor, textColor, size, border, onClick, }: {
        title: string;
        backgroundColor?: string;
        textColor?: string;
        size?: "small" | "medium" | "large";
        onClick?: () => void;
        border?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Input: ({ placeholder }: {
        placeholder: any;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default Modal;
