import React from 'react';
import 'akvo-react-form/dist/index.css';
import { Webform } from 'akvo-react-form';
import { formFn, questionGroupFn } from '../lib/store';
import data from '../lib/data';

const FormPreview = () => {
  const { questionGroups } = questionGroupFn.store.useState((s) => s);
  const formStore = formFn.store.useState((s) => s);

  return <Webform forms={data.toWebform(formStore, questionGroups)} />;
};

export default FormPreview;
