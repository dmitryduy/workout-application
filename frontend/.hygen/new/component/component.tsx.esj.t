---
to: <%= absPath %>/<%= componentName %>.tsx
---
import React from 'react';

import styles from './<%= componentName %>.module.scss';

interface I<%= componentName %>Props {
    prop: string
}

const <%= componentName %>: React.FC<I<%= componentName %>Props> = ({prop}) => {
  return (
    <<%= tag %>>
      {prop}
    </<%= tag %>>
  );
};

export default <%= componentName %>;