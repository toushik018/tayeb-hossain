import React, { useEffect, useState } from 'react';

const ScrollableRedLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = documentHeight - windowHeight;
      const progress = scrollTop / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 bg-blue-900 h-2 z-20"
      style={{ width: `${scrollProgress * 100}%` }}
    ></div>
  );
};

export default ScrollableRedLine;
