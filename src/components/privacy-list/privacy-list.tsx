const listItems = [
  '1. This Privacy Policy regarding the processing of personal data of users of the site https://www.dvitex.ru/ (hereinafter referred to as the Privacy Policy) was developed and applied by LLC Law Firm "Dvitex", OGRN 1107746800490, Moscow, per. Golutvinsky 1st, building 3–5, office 4–1 (hereinafter referred to as the Operator) in accordance with paragraphs. 2 hours 1 tbsp. 18.1 of the Federal Law of July 27, 2006 No. 152-FZ “On Personal Data” (hereinafter referred to as the Law on Personal Data)',
  '2.  This Privacy Policy defines the Operator’s policy regarding the processing of personal data accepted for processing, the procedure and conditions for the processing of personal data of individuals who have transferred their personal data for processing to the Operator (hereinafter referred to as personal data subjects) usingand without the use of automation tools, establishes procedures aimed at preventing violations of the legislation of the Russian Federation, eliminating the consequences of such violations related to the processing of personal data.',
  '3. The privacy policy has been developed to ensure the protection of the rights and freedoms of personal data subjects when processing their personal data, as well as to establish the responsibility of the Operator’s officials who have access to the personal data of personal data subjects for failure to comply with the requirements and standards.',
  '4. regulating the processing of personal data.',
  '5. Personal data of the Personal Data Subject is any information relating directly or indirectly to a specific or identifiable individual.',
  '6. The Operator processes the following personal data of Users:',
  '7. Last name, first name, patronymic;',
  '8. Email address;',
  '9. Phone number',
  '10. other data necessary for the Operator when providing services to Users to ensure the functioning of the site.',
  '11. The Operator processes personal data of Personal Data Subjects for the following purposes:',
  '12. providing the opportunity for feedback from Operator Specialists on User requests;',
  '13. providing the possibility of online payment for services ordered on the website;',
  '14. ensuring the fulfillment of the Operator’s obligations to Users;',
  '15. for market research purposes;',
  '16. informing the Personal Data Subject about promotions, competitions, special offers, new services, discounts, advertising materials and other services, as well as receiving commercial or advertising information and free products, participating in exhibitions or events, performing marketing research and notification of all special initiatives for clients;',
  '17. statistical purposes;',
  '18. for other purposes, if the corresponding actions of the Operator do not contradict the current legislation, the activities of the Operator, and the consent of the Personal Data Subject has been obtained for the said processing',
  '19. The operator of digital data processing by digital data subjects by performing any action (operations) or a set of actions (operations) implemented using automation tools or without the use of such means, including the following:',
  '20. collection;',
  '21. recording;',
  '22. systematization;',
  '23. accumulation;',
  '24. storage;',
  '25. clarification (update, change);',
  '26. extraction;',
  '27. usage;',
  '28. transmission (distribution, provision, access);',
  '29. depersonalization;',
  '30. blocking;',
  '31. deletion;',
  '32. destruction.'
]


const PrivacyList = () => {
  return <div className="w-full h-auto bg-main-white flex justify-center items-center mt-[80px]">
    <div className="w-[1750px] mt-[150px] flex flex-col gap-4 mb-[150px]">
      <h2 className="text-4xl font-patrizia text-center uppercase">Privacy Policy</h2>
      <ul className="flex flex-col gap-1 mt-10">
        {listItems.map((item, index) => (
          <li key={index} className="text-base font-helvetica">{item}</li>
        ))}
      </ul>
    </div>
  </div>;
};

export { PrivacyList };


