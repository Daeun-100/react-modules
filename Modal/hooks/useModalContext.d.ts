declare const useModalContext: () => {
    onClose: () => void;
    children: React.ReactNode;
    position?: "center" | "bottom";
};
export default useModalContext;
