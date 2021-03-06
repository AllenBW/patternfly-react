import { FunctionComponent, HTMLProps, ReactNode, ReactType } from 'react';

export interface DropdownToggleProps extends HTMLProps<HTMLButtonElement> {
  id?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: Function;
  parentRef?: HTMLElement;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  isPlain?: boolean;
  isDisabled?: boolean;
  iconComponent?: ReactType | null;
  splitButtonItems?: ReactNode[];
  isSplitButton?: boolean;
  'aria-label'?: string;
}

declare const DropdownToggle: FunctionComponent<DropdownToggleProps>;

export default DropdownToggle;
