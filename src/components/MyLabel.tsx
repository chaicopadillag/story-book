import { FC } from 'react';
import './myLabel.css';

export type MyLabelProps = {
  /**
   * The text to display in the label.
   */
  label: string;
  /**
   * The size of the label.
   */
  size?: 'small' | 'normal' | 'medium' | 'large';
  /**
   * Display the label in uppercase.
   */
  allCaps?: boolean;
  /**
   * the color of the label.
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * The custom color of the label.
   */
  fontColor?: string;
};

export const MyLabel: FC<MyLabelProps> = ({ label, size = 'normal', color = 'primary', allCaps = false, fontColor = '#0f0f0f' }) => {
  return (
    <span className={`label ${size} ${color} ${allCaps && 'uppercase'}`} style={{ color: fontColor }}>
      {label}
    </span>
  );
};
