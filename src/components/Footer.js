import React, {useEffect, useRef} from 'react';

const Footer = () => {
  const copyright = useRef(null);

  useEffect(() => {
    copyright.current.innerHTML = new Date().getFullYear();
  }, []);

  return(
    <footer>
    <small>Copyright&copy; <span ref={copyright}></span> Inês Borges All rights reserved </small>
  </footer>
  )
}

export default Footer;