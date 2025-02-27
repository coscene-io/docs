import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function PrivacyPolicy(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  // 根据当前语言确定重定向路径
  const redirectPath = currentLocale === 'en' 
    ? '/legal/privacy/en/privacy.html' 
    : '/legal/privacy/zh/privacy.html';
  
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