'use strict';

import React, {PropTypes} from 'react';
import './FontEditor.css';
import classNames from 'classnames';
import TextInput from '../TextInput';
import {curry} from 'ramda';

const handleFontName = curry((handler, defaultValue, value) => {
  handler({fontName: value, fontSize: defaultValue.fontSize});
});

const handleFontSize = curry((handler, defaultValue, value) => {
  handler({fontName: defaultValue.fontName, fontSize: value});
});

const FontEditor = ({id, label, defaultValue, editValue, inline, className}) => (
  <div className={classNames('FontEditor', className)}>
    <TextInput
      id={`${id}-fontName`}
      label={label.fontName}
      defaultValue={defaultValue.fontName}
      editText={handleFontName(editValue, defaultValue)}
      inline={inline}
      />
    <TextInput
      id={`${id}-fontSize`}
      label={label.fontSize}
      defaultValue={defaultValue.fontSize}
      editText={handleFontSize(editValue, defaultValue)}
      inline={inline}
      />
  </div>
);

FontEditor.propTypes = {
  id: PropTypes.string,
  label: PropTypes.shape({
    fontName: PropTypes.string,
    fontSize: PropTypes.string
  }).isRequired,
  defaultValue: PropTypes.shape({
    fontName: PropTypes.string,
    fontSize: PropTypes.string
  }),
  editValue: PropTypes.func,
  inline: PropTypes.bool,
  className: PropTypes.string
};

FontEditor.defaultProps = {
  id: '',
  defaultValue: {fontName: '', fontSize: ''},
  editValue: () => {},
  inline: false,
  className: null
};

export default FontEditor;
