import { Meta } from '@storybook/react';
import { default as Modal } from '../Modal';
declare const meta: Meta<typeof Modal>;
export default meta;
export declare const Default: () => import("react/jsx-runtime").JSX.Element;
export declare const Alert: () => import("react/jsx-runtime").JSX.Element;
export declare const Confirm: () => import("react/jsx-runtime").JSX.Element;
export declare const Input: () => import("react/jsx-runtime").JSX.Element;
export declare const WithControls: {
    (args: any): import("react/jsx-runtime").JSX.Element;
    args: {
        isOpen: boolean;
        size: string;
        position: string;
        onClose: () => void;
    };
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
    };
};
