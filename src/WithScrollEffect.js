import React, { useEffect, useRef } from 'react';
import './ScrollEffect.css';

const withScrollEffect = (WrappedComponent) => {
  return (props) => {
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const divElements = ref.current.querySelectorAll('div');

      divElements.forEach((div) => {
        div.classList.add('scroll-effect');
        observer.observe(div);
      });

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollEffect;
