import React from 'react';
import NavBar from '../components/Navbar/Navbar'
import { developmentData } from '../data/casestudy';
import Section14 from "../section/Section14/Section14";;

const contact = () => {
  return (
    <>
      <NavBar home={true} />
      <style jsx>
        {`
            .contactUs {
              padding-top: 4rem
            }

            @media screen and (max-width: 996px) {
              .contactUs{
                padding-top: 1rem
              }
            }
          `}
      </style>
      <div className='contactUs'>
        <Section14 data={developmentData.form_data} />
      </div>
    </>
  )
}

export default contact
