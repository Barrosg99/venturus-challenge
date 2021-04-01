import React from 'react';
import TagsInput from 'react-tagsinput';

export default function InputTags({ value, onChange }) {
  return (
    <TagsInput
      value={value}
      onChange={onChange}
      addKeys={[191, 13]}
    />
  );
}
