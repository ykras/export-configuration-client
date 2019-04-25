'use strict';

import React, {PropTypes} from 'react';
import './FooterTemplateEditor.css';
import classNames from 'classnames';
import TextInput from '../TextInput';
import {curry} from 'ramda';

const handleFooterLineEditing = curry((handler, currentFooterLines,
  editedFooterLineIndex, newFooterLine) => {
  const newFooterLines = currentFooterLines.map(fl => fl.trim());
  newFooterLines[editedFooterLineIndex] = newFooterLine.trim();
  handler(newFooterLines);
});

const FooterTemplateEditor = ({className, id, label, footerLines, editFooterLines}) => (
  <div className={classNames('FooterTemplateEditor', className)}>
    {footerLines.map((line, j) =>
      <TextInput
        id={`${id}-footerLine-${j + 1}`}
        key={j}
        label={`${label} ${j + 1}`}
        defaultValue={line}
        editText={handleFooterLineEditing(editFooterLines, footerLines, j)}
        />
    )}
  </div>
);

FooterTemplateEditor.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  footerLines: PropTypes.arrayOf(PropTypes.string),
  editFooterLines: PropTypes.func
};

FooterTemplateEditor.defaultProps = {
  className: null,
  id: '',
  footerLines: [],
  editFooterLines: () => {}
};

export default FooterTemplateEditor;
