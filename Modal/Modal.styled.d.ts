type PositionProps = {
    $position: 'center' | 'bottom';
};
declare const BackDrop: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionProps>> & string;
declare const ModalLayout: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionProps>> & string;
declare const CloseIcon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>, never>, never>> & string;
declare const ModalTitle: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const ModalContents: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
type ModalButtonProps = {
    $backgroundColor: string;
    $textColor: string;
    $size: 'small' | 'medium' | 'large';
};
declare const ModalButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ModalButtonProps>> & string;
declare const ModalButtonContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export { BackDrop, ModalLayout, CloseIcon, ModalTitle, ModalContents, ModalButton, ModalButtonContainer, };
