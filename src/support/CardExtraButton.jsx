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
  let buttonProps = {};
  switch (type) {
    case 'show-button':
      if (isExpand) {
        buttonProps = {
          onClick: onCancel,
          icon: <TbEditOff />,
        };
        break;
      }
      buttonProps = {
        onClick: onClick,
        icon: <TbEdit />,
      };
      break;
    case 'move-button':
      buttonProps = {
        onClick: onClick,
        icon: <BiMove />,
      };
      break;
    case 'edit-button':
      if (isExpand) {
        buttonProps = {
          onClick: onCancel,
          icon: <RiSettings5Fill />,
        };
        break;
      }
      buttonProps = {
        onClick: onClick,
        icon: <RiSettings5Line />,
      };
      break;
    case 'add-button':
      buttonProps = {
        onClick: onClick,
        icon: <MdOutlineAddCircleOutline />,
      };
      break;
    case 'save-button':
      buttonProps = {
        onClick: onClick,
        icon: <RiSave3Fill />,
      };
      break;
    default:
      buttonProps = {
        onClick: onClick,
        icon: <RiDeleteBin2Line />,
      };
      break;
  }
  return (
    <Button
      type="link"
      className={styles['button-icon']}
      disabled={disabled}
      {...buttonProps}
    />
  );
};

export default CardExtraButton;
