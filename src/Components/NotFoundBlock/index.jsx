import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  const { t } = useTranslation('global');
  return (
    <div className={styles.root}>
      <h1>
        <span>☹️</span>
        <br />
        {t('NotFoundBlock.title')}
      </h1>
      <p className={styles.description}>
      {t('NotFoundBlock.description')}
      </p>
    </div>
  );
};

export default NotFoundBlock;
