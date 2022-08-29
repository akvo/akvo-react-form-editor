import React, { useMemo } from 'react';
import { Card, Space, Button, Form, Input, Select, Checkbox } from 'antd';
import { UIStore, questionType } from '../lib/store';
import styles from '../styles.module.css';
import { TbEdit, TbEditOff } from 'react-icons/tb';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AddMoveButton, CardTitle } from '../support';

const QuestionSetting = ({
  id,
  name,
  type,
  variable,
  tooltip,
  required,
  handleCancelEdit,
}) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);

  return (
    <div>
      <Form.Item
        label={UIText.inputQuestionNameLabel}
        initialValue={name}
        name={`${namePreffix}-name`}
        required
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTypeLabel}
        initialValue={type}
        name={`${namePreffix}-type`}
        required
      >
        <Select
          className={styles['select-dropdown']}
          options={Object.keys(questionType).map((key) => ({
            label: questionType[key]?.split('_').join(' '),
            value: key,
          }))}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionVariableNameLabel}
        initialValue={variable}
        name={`${namePreffix}-variable`}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTooltipLabel}
        initialValue={tooltip}
        name={`${namePreffix}-tooltip`}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        initialValue={required}
        name={`${namePreffix}-required`}
        className={styles['input-checkbox-wrapper']}
      >
        <Checkbox> {UIText.inputQuestionRequiredCheckbox}</Checkbox>
      </Form.Item>
      <Space>
        <Button type="primary">{UIText.buttonSaveText}</Button>
        <Button onClick={handleCancelEdit}>{UIText.buttonCancelText}</Button>
      </Space>
    </div>
  );
};

const QuestionDefinition = ({ index, question, isLastItem }) => {
  const { buttonAddNewQuestionText } = UIStore.useState((s) => s.UIText);
  const activeEditQuestions = UIStore.useState((s) => s.activeEditQuestions);
  const { id, name } = question;

  const isEditQuestion = useMemo(() => {
    return activeEditQuestions.includes(id);
  }, [activeEditQuestions, id]);

  const handleEdit = () => {
    UIStore.update((s) => {
      s.activeEditQuestions = [...activeEditQuestions, id];
    });
  };

  const handleCancelEdit = () => {
    UIStore.update((s) => {
      s.activeEditQuestions = activeEditQuestions.filter((qId) => qId !== id);
    });
  };

  return (
    <div>
      <AddMoveButton text={buttonAddNewQuestionText} />
      <Card
        key={`${index}-${id}`}
        title={
          <CardTitle
            title={name}
            numbering={index + 1}
            onMoveClick={() => console.log('move')}
          />
        }
        headStyle={{ textAlign: 'left', padding: '0 12px' }}
        bodyStyle={{ padding: isEditQuestion ? 24 : 0 }}
        loading={false}
        extra={
          <Space>
            {!isEditQuestion ? (
              <Button
                type="link"
                className={styles['button-icon']}
                onClick={handleEdit}
                icon={<TbEdit />}
              />
            ) : (
              <Button
                type="link"
                className={styles['button-icon']}
                onClick={handleCancelEdit}
                icon={<TbEditOff />}
              />
            )}
            <Button
              type="link"
              className={styles['button-icon']}
              icon={<RiDeleteBin2Line />}
            />
          </Space>
        }
      >
        {isEditQuestion && (
          <QuestionSetting
            handleCancelEdit={handleCancelEdit}
            {...question}
          />
        )}
      </Card>
      {isLastItem && <AddMoveButton text={buttonAddNewQuestionText} />}
    </div>
  );
};

export default QuestionDefinition;
