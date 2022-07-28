import { useState, useEffect } from 'react';
import useScrollPrevent from '../Hooks/useScrollPrevent';

const useModal = () => {
  const [blockScroll, allowScroll] = useScrollPrevent();

  const [showModalContent, setShowModalContent] = useState([]);

  useEffect(() => {
    // Close the modal when the Escape key is pressed
    function onKeyDown(event) {
      if (showModalContent[0] && event.keyCode === 27) {
        setShowModalContent([false, null]);
      }
    }

    // Prevent scrolling
    if (showModalContent[0]) {
      blockScroll();
    }
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      allowScroll();
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showModalContent, blockScroll, allowScroll]);

  return { showModalContent, setShowModalContent };
};

export default useModal;
