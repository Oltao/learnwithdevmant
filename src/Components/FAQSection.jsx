import FAQAccordion from "./FAQAccordion";
import Heading from "./Heading";
import { FAQAccordionObj } from "./FAQAccordionObj";

function FAQSection() {
  return (
    <>
      <Heading firsttitle="Frequently Asked" secondtitle="Question" />
      {FAQAccordionObj.map(({ question, answer }, index) => (
        <FAQAccordion
          question={question}
          answer={answer}
          key={index}
        />
      ))}
    </>
  );
}

export default FAQSection;
