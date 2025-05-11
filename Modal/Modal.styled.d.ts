type PositionProps = {
    $position: 'center' | 'bottom';
};
type SizeProps = {
    $size: 'small' | 'medium' | 'large';
};
declare const BackDrop: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionProps>> & string;
declare const ModalLayout: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionProps & SizeProps>> & string;
export { BackDrop, ModalLayout };
