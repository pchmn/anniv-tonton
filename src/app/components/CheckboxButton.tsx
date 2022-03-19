import React, { PropsWithChildren } from 'react';
import './style.scss';

export function CheckboxButton({
  children,
  isSelected,
  onClick
}: PropsWithChildren<{ isSelected?: boolean; onClick?: () => void }>) {
  return (
    <div className={`ChecboxButton ${isSelected && 'isSelected'}`} onClick={onClick}>
      {children}
    </div>
  );
}
