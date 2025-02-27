import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function TermsOfService(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  // 根据当前语言确定重定向路径
  const redirectPath = currentLocale === 'en' 
    ? '/legal/terms/en/terms.html' 
    : '/legal/terms/zh/terms.html';
  
  useEffect(() => {
    window.location.href = redirectPath;
  }, [redirectPath]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}/>
  );
} 