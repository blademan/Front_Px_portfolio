import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
const portalEl = document.getElementById('modal-portal');

const dropIn = {
  hidden: {
    x: '-500vw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',

    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const ServicesModal = ({ visible, onCloseModal, children, id }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="  fixed top-0 right-0 left-0 z-[99] w-full md:inset-0  h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog">
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" relative flex items-center justify-center  p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-D_containerColor">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {id === 1 ? 'Frontend Developer' : 'WordPress Developer'}
                </h3>
                <button
                  onClick={() => onCloseModal([false, null])}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalEl,
  );
};

export default ServicesModal;
