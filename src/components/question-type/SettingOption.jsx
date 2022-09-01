import React, { useState } from 'react';
import { Form, Checkbox, Space, Row, Col, Input, Button } from 'antd';
import styles from '../../styles.module.css';
import { UIStore } from '../../lib/store';
import {
  MdOutlineRemoveCircleOutline,
  MdOutlineAddCircleOutline,
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from 'react-icons/md';
import { orderBy, takeRight } from 'lodash';

const generateId = () => new Date().getTime();

const defaultOptions = ({ init = false, order = 0 }) => {
  const option = {
    code: null,
    name: 'New Option',
    order: 1,
  };
  if (init) {
    return [
      {
        ...option,
        id: generateId(),
        order: 1,
      },
      {
        ...option,
        id: generateId() + 1,
        order: 2,
      },
    ];
  }
  return {
    ...option,
    id: generateId(),
    order: order,
  };
};

const SettingOption = ({ id }) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const [options, setOptions] = useState(defaultOptions({ init: true }));

  const handleOnChangeCode = (e, current) => {
    const { id: currentId } = current;
    setOptions(
      options.map((opt) => {
        if (opt.id === currentId) {
          opt['code'] = e.target.value;
        }
        return opt;
      })
    );
  };

  const handleOnChangeOption = (e, current) => {
    const { id: currentId } = current;
    setOptions(
      options.map((opt) => {
        if (opt.id === currentId) {
          opt['name'] = e.target.value;
        }
        return opt;
      })
    );
  };

  const handleOnAddOption = (current) => {
    const { order: currentOrder } = current;
    const lastOrder = takeRight(orderBy(options, 'order'))[0].order;
    // reorder prev option
    const reorderOptions = options.map((opt) => {
      if (opt.order > currentOrder) {
        opt['order'] = opt['order'] + 1;
      }
      if (
        opt.order < currentOrder &&
        opt.order !== 1 &&
        currentOrder !== lastOrder
      ) {
        opt['order'] = opt['order'] - 1;
      }
      return opt;
    });
    const addOptions = [
      ...reorderOptions,
      defaultOptions({ order: currentOrder + 1 }),
    ];
    setOptions(orderBy(addOptions, 'order'));
  };

  const handleOnMoveOption = (current, targetOrder) => {
    const { order: currentOrder } = current;

    const prevOptions = options.filter(
      (opt) => opt.order !== currentOrder && opt.order !== targetOrder
    );
    const currentOption = options
      .filter((opt) => opt.order === currentOrder)
      .map((opt) => ({
        ...opt,
        order: targetOrder,
      }));
    const targetOption = options
      .filter((opt) => opt.order === targetOrder)
      .map((opt) => ({
        ...opt,
        order: currentOrder,
      }));
    setOptions(
      orderBy([...prevOptions, ...currentOption, ...targetOption], 'order')
    );
  };

  const handleOnDeleteOption = (currentId) => {
    // delete and reorder
    setOptions(
      orderBy(options, 'order')
        .filter((opt) => opt.id !== currentId)
        .map((opt, opti) => ({ ...opt, order: opti + 1 }))
    );
  };

  return (
    <div>
      <p className={styles['more-question-setting-text']}>
        {UIText.questionMoreOptionTypeSettingText}
      </p>
      <Space className={styles['space-align-left']}>
        <Form.Item
          initialValue={false}
          name={`${namePreffix}-allow_other`}
        >
          <Checkbox> {UIText.inputQuestionAllowOtherCheckbox}</Checkbox>
        </Form.Item>
      </Space>
      {orderBy(options, 'order').map((d, di) => (
        <Row
          key={`option-${id}-${di}`}
          align="start"
          justify="start"
          gutter={[12, 12]}
        >
          <Col span={4}>
            <Form.Item
              initialValue={d.code}
              name={`${namePreffix}-option-code-${d.id}`}
            >
              <Input
                placeholder="Code"
                onChange={(e) => handleOnChangeCode(e, d)}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              initialValue={d.name}
              name={`${namePreffix}-option-name-${d.id}`}
            >
              <Input onChange={(e) => handleOnChangeOption(e, d)} />
            </Form.Item>
          </Col>
          <Col>
            <Space>
              <Button
                type="link"
                className={styles['button-icon']}
                icon={<MdOutlineAddCircleOutline />}
                onClick={() => handleOnAddOption(d)}
              />
              {di !== 0 && (
                <Button
                  type="link"
                  className={styles['button-icon']}
                  icon={<MdOutlineArrowCircleUp />}
                  onClick={() => handleOnMoveOption(d, d.order - 1)}
                />
              )}
              {di !== options.length - 1 && (
                <Button
                  type="link"
                  className={styles['button-icon']}
                  icon={<MdOutlineArrowCircleDown />}
                  onClick={() => handleOnMoveOption(d, d.order + 1)}
                />
              )}
              <Button
                type="link"
                className={styles['button-icon']}
                icon={<MdOutlineRemoveCircleOutline />}
                onClick={() => handleOnDeleteOption(d.id)}
              />
            </Space>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default SettingOption;
