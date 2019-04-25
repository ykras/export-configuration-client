'use strict';

import React from 'react';
import './ExportPathFormatLabel.css';

const ExportPathFormatLabel = () => {
  const labelText = 'Формат: ftp://<Network address>/..., \\\\<Network address>\\...';
  return (
    <div className="ExportPathFormatLabel">
      <label>
        {labelText}
      </label>
    </div>
  );
};

export default ExportPathFormatLabel;
