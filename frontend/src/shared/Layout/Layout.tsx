import React, { PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

interface ILayoutProps {
    title: string
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({title, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;