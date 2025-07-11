import { useEffect } from "react";

export const AccordionItem = (props) => {
  const { handleToggle, active, activated, faq } = props;
  const { title, text, id  } = faq;

  useEffect(() => {
    if (id === activated && !active) {
      handleToggle(id);
    }
  }, []);

  return (
    <div className={`accordion__item ${active ? '_active' : ''}`} onClick={() => handleToggle(id)}>
      <div className="accordion__head">
        <div className="accordion__title">
         <span style={{display: props.numerical ? 'inline' : 'none'}} className="accordion__num">{id}.</span>
          <span className="accordion__title-txt">{title}</span>
        </div>
        <div className="accordion__icon"></div>
      </div>
      <div className="accordion__content">
        <p className="accordion__text">{text}</p>
      </div>
    </div>
  );
};
