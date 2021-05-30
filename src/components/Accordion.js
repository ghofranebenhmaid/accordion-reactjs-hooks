import React, { useState } from 'react';
import styled from 'styled-components';

const Data = [
   {
      title: 'About',
      discreption:
         'I’m a skilled and diligent frontend developer with a passion for React and a flair for user interface design. I have experience with different programming languages and technologies, including HTML, CSS, JavaScript, Node.js, Express.js, React, MySQL, Knex.js and Git/Bitbucket (Version control) as well as WordPress. I’m also very skilled in using Adobe design programs, such as Photoshop, Illustrator, InDesign, Lightroom, Premiere Pro, After Effects and 3Ds max. ',
   },
   {
      title: 'Skills',
      discreption: 'HTML, CSS, JavaScript, Node.js, Express.js, React, MySQL, Knex.js and Git/Bitbucket  ',
   },
];

function Accordion() {
   const [clicked, setClicked] = useState(false);

   const toggle = (index) => {
      if (clicked === index) {
         return setClicked(null);
      }
      setClicked(index);
   };
   return (
      <div>
         <AccordionSection>
            <Container>
               {Data.map((item, index) => {
                  return (
                     <>
                        <Wrap
                           onClick={() => {
                              toggle(index);
                           }}
                           key={index}
                        >
                           <h1>{item.title}</h1>
                           <span> {clicked === index ? '-' : '+'}</span>
                        </Wrap>
                        {clicked === index ? (
                           <Dropdown>
                              <p>{item.discreption}</p>
                           </Dropdown>
                        ) : null}
                     </>
                  );
               })}
            </Container>
         </AccordionSection>
      </div>
   );
}
const AccordionSection = styled.div``;
const Dropdown = styled.div`
   padding: 20px;
   color: #1c1c1c;
   background-color: #c1c1c1;
`;
const Container = styled.div`
   box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.3);
   width: 700px;
   max-width: 100%;
   margin: 0 auto;
   cursor: pointer;

`;
const Wrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 1px solid #1c1c1c;
   color: #c1c1c1;
   span {
      font-size: 30px;
      font-weight: 700;
   }
`;

export default Accordion;
