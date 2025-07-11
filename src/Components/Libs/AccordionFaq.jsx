import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem';

export default function AccordionFaq() {
   
   const faqItems = [
      {
         id: 1,
         title: 'Accordion 1',
         text: "Trust and respect form the cornerstone of our agency. We prioritize building strong relationships with our clients, fostering an environment of trust and respect. We value open communication, actively listen to our clients' needs, and work collaboratively to ensure their success. Our clients can rely on us to maintain their privacy, honor their boundaries, and handle their business affairs with utmost professionalism."
      },
      {
         id: 2,
         title: 'Accordion 2',
         text: "At Liamoon, we are fueled by a deep passion for empowering women to achieve financial success and fulfillment. We believe in harnessing the power of passion to drive our clients' journeys towards becoming wealthy women and millionaires. With our unwavering commitment and enthusiasm, we inspire creators to embrace their passions and turn them into thriving businesses."
      },
      {
         id: 3,
         title: 'Accordion 3',
         text: "Reliability and dedication are the pillars upon which our agency stands. We understand the importance of delivering consistent and exceptional service to our clients. Our team of dedicated professionals goes above and beyond to provide unwavering support, guidance, and expertise. We are committed to the success of our clients, working tirelessly to help them achieve their financial goals and build lasting careers on Liamoon."
      },
   ]
   const [activeItems, setActiveItems] = useState([]);
  const [activatedItem, setActivatedItem] = useState(1);
  const [freemode, setFreemode] = useState(true); // Default is false, change as needed

  const handleToggle = (itemId) => {
    if (freemode) {
      // If freemode is true, toggle the clicked item
      setActiveItems((prevActiveItems) => {
        if (prevActiveItems.includes(itemId)) {
          return prevActiveItems.filter((item) => item !== itemId);
        } else {
          return [...prevActiveItems, itemId];
        }
      });
    } else {
      // If freemode is false, open only the clicked item
      setActiveItems([itemId]);
    }
  };

  return (
    <div>
      {faqItems.map((faq) => (
        <AccordionItem
          key={faq.id}
          handleToggle={handleToggle}
          active={activeItems.includes(faq.id)}
          activated={activatedItem}
          faq={faq}
          freemode={freemode}
        />
      ))}
    </div>
  );
}
