import React from 'react';
import { Button } from 'antd';
import styles from '../styles.module.css';
import { TbEdit, TbEditOff } from 'react-icons/tb';
import {
  RiSettings5Fill,
  RiSettings5Line,
  RiDeleteBin2Line,
  RiSave3Fill,
} from 'react-icons/ri';
import { BiMove } from 'react-icons/bi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const CardExtraButton = ({
  type = 'delete-button',
  isExpand = false,
  onClick = () => {},
  onCancel = () => {},
  disabled = false,
}) => {
  switch (type) {
    case 'show-button':
      if (isExpand) {
        return (
          <Button
            type="link"
            className={styles['button-icon']}
            onClick={onCancel}
            icon={<TbEditOff />}
            disabled={disabled}
          />
        );
      }
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          icon={<TbEdit />}
          disabled={disabled}
        />
      );
    case 'move-button':
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          disabled={disabled}
          icon={<BiMove />}
        />
      );
    case 'edit-button':
      if (isExpand) {
        return (
          <Button
            type="link"
            className={styles['button-icon']}
            onClick={onCancel}
            icon={<RiSettings5Fill />}
            disabled={disabled}
          />
        );
      }
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          icon={<RiSettings5Line />}
          disabled={disabled}
        />
      );
    case 'add-button':
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          icon={<MdOutlineAddCircleOutline />}
          disabled={disabled}
        />
      );
    case 'save-button':
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          icon={<RiSave3Fill />}
        />
      );

    default:
      return (
        <Button
          type="link"
          className={styles['button-icon']}
          onClick={onClick}
          icon={<RiDeleteBin2Line />}
          disabled={disabled}
        />
      );
  }
};

export default CardExtraButton;
