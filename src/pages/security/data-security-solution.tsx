import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DataSecuritySolution(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  // 根据当前语言确定重定向路径
  const redirectPath = currentLocale === 'en' 
    ? '/security/data-security-solution/en/data-security-solution.html' 
    : '/security/data-security-solution/zh/data-security-solution.html';

    console.log('currentLocale', currentLocale);
  
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