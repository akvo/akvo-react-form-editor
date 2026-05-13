import React from 'react';
import { Alert, Typography } from 'antd';
import 'akvo-react-form/dist/index.css';
import { Webform } from 'akvo-react-form';
import { formFn, questionGroupFn } from '../lib/store';
import data from '../lib/data';

const { Text } = Typography;

class PreviewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <Alert
          type="error"
          message="Preview could not be rendered"
          description={
            <div>
              <Text>
                Some question config may be incomplete. Fix the issues below and
                switch back to Preview to retry.
              </Text>
              <pre
                style={{
                  marginTop: 12,
                  padding: 12,
                  background: '#fff1f0',
                  border: '1px solid #ffa39e',
                  borderRadius: 4,
                  fontSize: 12,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {this.state.error.toString()}
                {this.state.error.stack ? `\n\n${this.state.error.stack}` : ''}
              </pre>
            </div>
          }
          showIcon
        />
      );
    }
    return this.props.children;
  }
}

const FormPreview = () => {
  const { questionGroups } = questionGroupFn.store.useState((s) => s);
  const formStore = formFn.store.useState((s) => s);
  const forms = data.toWebform(formStore, questionGroups);

  return (
    <PreviewErrorBoundary key={JSON.stringify(forms)}>
      <Webform forms={forms} />
    </PreviewErrorBoundary>
  );
};

export default FormPreview;
