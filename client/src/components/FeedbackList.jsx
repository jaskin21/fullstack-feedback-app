import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './sub/FeedbackItem';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, editFeedback, setBtnDisabled } =
    useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return (
      <div className=' p-10 font-bold text-center text-xl'>
        No Feed Back Yet
      </div>
    );
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item._id}
              item={item}
              update={() => {
                editFeedback(item._id, item.text, item.rating);
                setBtnDisabled(false);
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
