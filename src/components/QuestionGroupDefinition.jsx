import React, { useMemo, useState } from 'react';
import { Card } from 'antd';
import { UIStore, questionGroupFn } from '../lib/store';
import QuestionGroupSetting from './QuestionGroupSetting';
import QuestionDefinition from './QuestionDefinition';
import { ButtonAddMove, CardTitle, AlertPopup } from '../support';
import { orderBy, maxBy, minBy, uniq, difference, intersection } from 'lodash';

const QuestionGroupDefinition = ({ index, questionGroup, isLastItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const questionGroups = questionGroupFn.store.useState(
    (s) => s.questionGroups
  );
  const movingQg = UIStore.useState((s) => s.activeMoveQuestionGroup);
  const {
    activeQuestionGroups,
    activeEditQuestionGroups,
    activeEditQuestions,
    hostParams,
  } = UIStore.useState((s) => s);
  const defaultQuestionParam = hostParams?.defaultQuestionParam;

  const { id, label, questions, order } = questionGroup;
  const questionIds = questions.map((q) => q.id);
  const {
    buttonAddNewQuestionGroupText,
    buttonMoveQuestionGroupText,
    alertDeleteQuestionGroupTitle,
    alertDeleteQuestionGroup,
    buttonDeleteText,
  } = UIStore.useState((s) => s.UIText);

  const showQuestion = useMemo(() => {
    return activeQuestionGroups.includes(id);
  }, [activeQuestionGroups, id]);

  const isEditQuestionGroup = useMemo(() => {
    return activeEditQuestionGroups.includes(id);
  }, [activeEditQuestionGroups, id]);

  const disableDelete = useMemo(() => {
    return questions.filter((q) => q?.disableDelete)?.length;
  }, [questions]);

  const handleHideQuestions = () => {
    UIStore.update((s) => {
      s.activeQuestionGroups = activeQuestionGroups.filter(
        (qgId) => qgId !== id
      );
    });
  };

  const handleCancelEditGroup = () => {
    UIStore.update((s) => {
      s.activeEditQuestionGroups = activeEditQuestionGroups.filter(
        (qgId) => qgId !== id
      );
    });
  };

  const handleShowQuestions = () => {
    UIStore.update((s) => {
      s.activeQuestionGroups = [...activeQuestionGroups, id];
    });
    handleCancelEditGroup();
  };

  const handleEditGroup = () => {
    UIStore.update((s) => {
      s.activeEditQuestionGroups = [...activeEditQuestionGroups, id];
    });
    handleHideQuestions();
  };

  const handleCancelMove = () => {
    UIStore.update((s) => {
      s.activeMoveQuestionGroup = null;
    });
  };

  const handleMove = () => {
    UIStore.update((s) => {
      s.activeMoveQuestionGroup =
        movingQg === questionGroup ? null : questionGroup;
    });
  };

  const handleExpandAll = () => {
    handleShowQuestions();
    UIStore.update((s) => {
      s.activeEditQuestions = uniq([...s.activeEditQuestions, ...questionIds]);
    });
  };

  const handleCancelExpandAll = () => {
    handleHideQuestions();
    UIStore.update((s) => {
      s.activeEditQuestions = difference(s.activeEditQuestions, questionIds);
    });
  };

  const handleDelete = () => {
    const newQuestionGroups = questionGroups
      .filter((qg) => id !== qg.id)
      .map((qg) => {
        if (qg.order > order) {
          return { ...qg, order: qg.order - 1 };
        }
        return qg;
      });
    questionGroupFn.store.update((s) => {
      s.questionGroups = newQuestionGroups;
    });
    setIsModalOpen(false);
  };

  const handleOnAdd = (prevOrder) => {
    const prevQg = questionGroups.filter((qg) => qg.order <= prevOrder);
    const nextQg = questionGroups
      .filter((qg) => qg.order > prevOrder)
      .map((qg) => ({
        ...qg,
        order: qg.order + 1,
      }));
    const newQuestionGroups = [
      ...prevQg,
      questionGroupFn.add({
        prevOrder: prevOrder,
        defaultQuestionParam: defaultQuestionParam,
      }),
      ...nextQg,
    ];
    questionGroupFn.store.update((s) => {
      s.questionGroups = newQuestionGroups;
    });
  };

  const handleOnMove = (prevOrder, lastItem = false) => {
    const currentQg = {
      ...movingQg,
      order: movingQg.order < prevOrder ? prevOrder : prevOrder + 1,
    };
    const orderedQg = questionGroups
      .filter((qg) => qg.order !== movingQg.order)
      .map((x) => {
        if (lastItem) {
          if (x.order > movingQg.order) {
            return { ...x, order: x.order - 1 };
          }
          return x;
        }
        if (
          prevOrder > movingQg.order &&
          x.order > movingQg.order &&
          x.order <= prevOrder
        ) {
          return { ...x, order: x.order - 1 };
        }
        if (
          prevOrder < movingQg.order &&
          x.order < movingQg.order &&
          x.order >= prevOrder + 1
        ) {
          return { ...x, order: x.order + 1 };
        }
        return x;
      });
    questionGroupFn.store.update((s) => {
      s.questionGroups = orderBy([...orderedQg, currentQg], 'order');
    });
    UIStore.update((s) => {
      s.activeMoveQuestionGroup = null;
    });
  };

  const dependant = useMemo(() => {
    const allQ = questionGroups
      .map((qg) => qg.questions)
      .flatMap((x) => x)
      .map((q) => ({
        ...q,
        questionGroup: questionGroups.find((qg) => q.questionGroupId === qg.id),
      }));

    const dependencies = allQ.filter(
      (q) =>
        q?.dependency?.filter((d) => questionIds.find((qid) => qid === d.id))
          .length || false
    );

    const movingQids = movingQg?.questions?.map((q) => q.id) || [];
    const movingQ = movingQg?.questions?.filter((q) => {
      const selfDependency =
        q?.dependency?.filter((d) => movingQids.includes(d.id))?.length || 0;
      return !selfDependency;
    });

    let disabled = { current: false, last: false };

    const movingQDependency = maxBy(
      movingQ
        ?.map(
          (q) =>
            q?.dependency?.map((q) => allQ.find((a) => a.id === q.id)) || []
        )
        ?.flatMap((q) => q) || [],
      'questionGroup.order'
    );

    if (movingQDependency?.questionGroup?.order >= order) {
      disabled = {
        current: true,
        last: true,
      };
    }

    const movingQDependant = minBy(
      allQ.filter(
        (q) =>
          q?.dependency?.filter((d) => movingQ?.find((qs) => qs.id === d.id))
            .length || false
      ),
      'questionGroup.order'
    );

    const dependantIsLessThanOrder =
      movingQDependant?.questionGroup?.order < (isLastItem ? order + 1 : order);

    if (dependantIsLessThanOrder) {
      disabled = {
        current: true,
        last: true,
      };
    }

    return {
      disabled: disabled,
      dependant: dependencies,
    };
  }, [questionGroups, questionIds, movingQg, order, isLastItem]);

  const rightButtons = [
    {
      type: 'expand-all-button',
      isExpand:
        showQuestion && intersection(activeEditQuestions, questionIds).length,
      onClick: handleExpandAll,
      onCancel: handleCancelExpandAll,
    },
    {
      type: 'delete-button',
      onClick: () => setIsModalOpen(true),
      disabled: (!index && isLastItem) || disableDelete,
    },
    {
      type: 'edit-button',
      isExpand: isEditQuestionGroup,
      onClick: handleEditGroup,
      onCancel: handleCancelEditGroup,
    },
  ];

  const leftButtons = [
    {
      type: 'move-button',
      onClick: handleMove,
      onCancel: handleHideQuestions,
      disabled: !index && isLastItem,
    },
    {
      type: 'show-button',
      isExpand: showQuestion,
      onClick: handleShowQuestions,
      onCancel: handleHideQuestions,
    },
  ];

  return (
    <div>
      <ButtonAddMove
        text={
          movingQg ? buttonMoveQuestionGroupText : buttonAddNewQuestionGroupText
        }
        disabled={
          movingQg === questionGroup ||
          movingQg?.order + 1 === order ||
          dependant.disabled.current
        }
        movingItem={movingQg}
        handleCancelMove={handleCancelMove}
        handleOnAdd={() => handleOnAdd(order - 1)}
        handleOnMove={() => handleOnMove(order - 1)}
      />
      <Card
        key={`${index}-${id}`}
        title={
          <CardTitle
            buttons={leftButtons}
            title={`${order}. ${label}`}
          />
        }
        headStyle={{
          textAlign: 'left',
          padding: '0 12px',
          backgroundColor: movingQg?.id === id ? '#FFF2CA' : '#FFF',
          border: movingQg?.id === id ? '1px dashed #ffc107' : 'none',
        }}
        bodyStyle={{
          padding: isEditQuestionGroup || showQuestion ? 24 : 0,
          borderTop:
            isEditQuestionGroup || showQuestion ? '1px solid #f3f3f3' : 'none',
        }}
        extra={<CardTitle buttons={rightButtons} />}
      >
        {isEditQuestionGroup && <QuestionGroupSetting {...questionGroup} />}
        {showQuestion &&
          questions.map((q, qi) => (
            <QuestionDefinition
              key={`question-definition-${qi}`}
              index={qi}
              question={q}
              questionGroup={questionGroup}
              isLastItem={qi === questions.length - 1}
            />
          ))}
      </Card>
      {isLastItem && (
        <ButtonAddMove
          text={
            movingQg
              ? buttonMoveQuestionGroupText
              : buttonAddNewQuestionGroupText
          }
          disabled={movingQg === questionGroup || dependant.disabled.last}
          movingItem={movingQg}
          handleCancelMove={handleCancelMove}
          handleOnAdd={() => handleOnAdd(order)}
          handleOnMove={() => handleOnMove(order, true)}
        />
      )}
      <AlertPopup
        visible={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{ danger: true }}
        title={alertDeleteQuestionGroupTitle}
        okText={buttonDeleteText}
      >
        {alertDeleteQuestionGroup}
      </AlertPopup>
    </div>
  );
};

export default QuestionGroupDefinition;
