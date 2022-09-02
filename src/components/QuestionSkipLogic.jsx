import React, { useMemo, useState } from 'react';
import { Form, Select, Row, Col, InputNumber, Input } from 'antd';
import styles from '../styles.module.css';
import { CardExtraButton } from '../support';
import { UIStore, questionGroupFn, skipLogicOperator } from '../lib/store';

const QuestionSkipLogic = ({ question }) => {
  const { id, questionGroupId, skipLogic } = question;
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const { questionGroups } = questionGroupFn.store.useState((s) => s);
  const [dependentTo, setDependentTo] = useState(null);
  const [operators, setOperators] = useState([]);

  const questions = useMemo(() => {
    return questionGroups.flatMap((qg) => qg.questions);
  }, [questionGroups]);

  const dependentToQuestions = useMemo(() => {
    return questions
      .filter((q) => ['multiple_option', 'option', 'number'].includes(q.type))
      .map((q) => ({
        label: q.name,
        value: q.id,
      }));
  }, [questions]);

  const updateState = (skId, name, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              const skipLogic = q.skipLogic.map((sk) => {
                if (sk.id === skId) {
                  return {
                    ...sk,
                    [name]: value,
                  };
                }
                return sk;
              });
              return {
                ...q,
                skipLogic: skipLogic.filter((sk) => sk?.dependentTo),
              };
            }
            return q;
          });
          return {
            ...qg,
            questions: questions,
          };
        }
        return qg;
      });
    });
  };

  const handleChangeDependentTo = (skId, e) => {
    const selected = questions.find((q) => q.id === e);
    let operatorValues = {};
    if (['option', 'multiple_option'].includes(selected.type)) {
      operatorValues = skipLogicOperator.option;
    } else {
      operatorValues = skipLogicOperator[selected.type];
    }
    setDependentTo(selected);
    setOperators(
      Object.keys(operatorValues).map((key) => ({
        label: operatorValues[key].split('_').join(' '),
        value: operatorValues[key],
      }))
    );
    updateState(skId, 'dependentTo', e);
  };

  const handleChangeDependentLogic = (skId, e) => {
    updateState(skId, 'dependentLogic', e);
  };

  const handleChangeDependentAnswer = (skId, val) => {
    updateState(skId, 'dependentAnswer', val);
  };

  // ondelete

  return (
    <Row gutter={[24, 24]}>
      {skipLogic.map((sk, ski) => (
        <Col
          key={`skip-logic-${id}-${ski}`}
          span={24}
        >
          <Form.Item
            label={UIText.inputQuestionDependentToLabel}
            initialValue={sk.dependentTo || []}
            name={`${namePreffix}-dependent_to`}
          >
            <Row
              align="middle"
              justify="space-between"
            >
              <Col span={23}>
                <Select
                  className={styles['select-dropdown']}
                  options={dependentToQuestions}
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  onChange={(e) => handleChangeDependentTo(sk.id, e)}
                />
              </Col>
              <Col
                span={1}
                align="end"
              >
                <CardExtraButton
                  type="delete-button"
                  onClick={() => console.log('delete')}
                />
              </Col>
            </Row>
          </Form.Item>
          <Row
            align="middle"
            justify="space-between"
            gutter={[12, 12]}
          >
            <Col span={12}>
              <Form.Item
                label={UIText.inputQuestionDependentLogicLabel}
                initialValue={sk.dependentLogic || []}
                name={`${namePreffix}-dependent_logic`}
              >
                <Select
                  className={styles['select-dropdown']}
                  options={operators}
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  onChange={(e) => handleChangeDependentLogic(sk.id, e)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={UIText.inputQuestionDependentAnswerLabel}
                initialValue={sk.dependentAnswer}
                name={`${namePreffix}-dependent_answer`}
              >
                {!dependentTo && <Input disabled />}
                {dependentTo?.type === 'number' && (
                  <InputNumber
                    style={{ width: '100%' }}
                    controls={false}
                    keyboard={false}
                    onChange={(e) => handleChangeDependentAnswer(sk.id, e)}
                  />
                )}
                {['option', 'multiple_option'].includes(dependentTo?.type) && (
                  <Select
                    className={styles['select-dropdown']}
                    options={[]}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                    onChange={(e) => handleChangeDependentAnswer(sk.id, e)}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default QuestionSkipLogic;
