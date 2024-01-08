// FAQ.jsx
"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team by emailing support@example.com or using the contact form on our website.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container mt-20">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="flex items-center justify-between cursor-pointer "
            onClick={() => handleAccordionClick(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span
              className={`transform transition-transform ${
                activeIndex === index ? "transform rotate-180" : "rotate-0"
              }`}
            >
              &#x2B;
            </span>
          </div>
          {activeIndex === index && (
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
