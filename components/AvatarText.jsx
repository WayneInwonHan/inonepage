import React, { useEffect, useState } from "react";
import "./AvatarText.css";

const AvatarText = () => {
  const dataText = ["Title1", "Title2", "Title3", "Title4"];

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 4000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      const speed = isDeleting ? 30 : 100;
      setTypingSpeed(speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, dataText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="absolute left-4 bottom-4 flex flex-col z-10 text-white font-bold">
      <h3 className="AvatarTextShadow text-[2rem] m-0 translate-y-5">
        subtitle
      </h3>
      <h1 className="AvatarTextShadow text-[4rem] m-0">
        {currentText}
        <span
          className="cursor font-thin AvatarCursorShadow ml-2"
          aria-hidden="true"
        >
          |
        </span>
      </h1>
    </div>
  );
};

export default AvatarText;
