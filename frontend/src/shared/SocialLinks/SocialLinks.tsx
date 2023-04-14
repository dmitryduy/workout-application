import React from 'react';


import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Google} from '../../assets/icons/google.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';

import styles from './SocialLinks.module.scss';


const SocialLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <Facebook/>
      <Google/>
      <Twitter/>
    </div>
  );
};

export default SocialLinks;