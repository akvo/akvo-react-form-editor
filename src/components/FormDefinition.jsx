import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { UIStore, FormStore } from '../lib/store';

const FormDefinition = ({ name, description }) => {
  const form = Form.useFormInstance();
  const UIText = UIStore.useState((s) => s.UIText);
  const { inputFormNameLabel, inputFormDescriptionLabel } = UIText;

  useEffect(() => {
    form.setFieldsValue({ 'form-name': name });
    form.setFieldsValue({ 'form-description': description });
  }, [form, name, description]);

  return (
    <div
      key="form-definition-input"
      className="arfe-form-definition"
    >
      <Form.Item
        label={inputFormNameLabel}
        name="form-name"
        initialValue={name}
      >
        <Input
          onChange={(e) =>
            FormStore.update((u) => {
              u.name = e?.target?.value;
            })
          }
        />
      </Form.Item>
      <Form.Item
        label={inputFormDescriptionLabel}
        name="form-description"
        initialValue={description}
      >
        <Input.TextArea
          rows={5}
          onChange={(e) =>
            FormStore.update((u) => {
              u.description = e?.target?.value;
            })
          }
        />
      </Form.Item>
    </div>
  );
};

export default FormDefinition;
