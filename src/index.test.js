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
});
