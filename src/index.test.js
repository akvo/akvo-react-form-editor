import { render, screen } from '@testing-library/react';
import WebformEditor from '.';
import '@testing-library/jest-dom';

describe('WebformEditor', () => {
  test('renders form editor with form name', () => {
    render(<WebformEditor initialValue={{}} />);
    const expectedText = screen.getByText(/Form Name/i);
    expect(expectedText).toBeInTheDocument();
  });

  test('renders save status indicator by default', () => {
    render(
      <WebformEditor
        initialValue={{}}
        enableAutoSave={true}
      />
    );
    expect(screen.getByText(/All changes saved/i)).toBeInTheDocument();
  });

  test('hides save status indicator when enableAutoSave is false', () => {
    render(
      <WebformEditor
        initialValue={{}}
        enableAutoSave={false}
      />
    );
    expect(screen.queryByText(/All changes saved/i)).not.toBeInTheDocument();
  });

  test('recovers unsaved draft from localStorage on reload', () => {
    const formId = 998877;
    const initialForm = {
      id: formId,
      name: 'Server Title',
      version: 1,
      question_group: [
        {
          id: 1,
          name: 'QG1',
          question: [
            {
              id: 101,
              name: 'Q1',
              label: 'Server Question Label',
              type: 'input',
            },
          ],
        },
      ],
    };

    const cachedDraftPayload = {
      form: {
        id: formId,
        name: 'Recovered Draft Title',
        version: 1,
        description: 'Recovered Description',
        languages: [],
        defaultLanguage: 'en',
        translations: [],
      },
      questionGroups: [
        {
          id: 1,
          name: 'QG1',
          questions: [
            {
              id: 101,
              name: 'Q1',
              label: 'Recovered Question Label',
              type: 'input',
            },
          ],
        },
      ],
    };

    window.localStorage.setItem(
      `arfe_draft_${formId}`,
      JSON.stringify(cachedDraftPayload)
    );
    window.localStorage.setItem(
      `arfe_status_${formId}`,
      JSON.stringify({ formId, status: 1, updatedAt: Date.now() })
    );

    render(
      <WebformEditor
        initialValue={initialForm}
        enableDraftRecovery={true}
      />
    );

    expect(screen.getByText(/Unsaved changes/i)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(/Recovered Draft Title/i)
    ).toBeInTheDocument();
  });
});
