import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDelete = 2000,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    let timerDuration = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && text === phrases[loopNum % phrases.length]) {
      timerDuration = delayBeforeDelete; // Wait before deleting
    } else if (isDeleting && text === '') {
      timerDuration = 500; // Wait before starting next phrase
    }

    const timer = setTimeout(handleTyping, timerDuration);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {text}
      <span className="animate-pulse border-r-2 border-gold ml-1 h-[1em] inline-block"></span>
    </span>
  );
};
