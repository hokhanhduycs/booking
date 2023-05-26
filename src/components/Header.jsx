import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBed,
   faCalendarDays,
   faCar,
   faPerson,
   faPlane,
   faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';

import './header.scss';

const Header = () => {
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: null,
         key: 'selection',
      },
   ]);
   return (
      <div className="header">
         <div className="headerContainer">
            <div className="headerList">
               <div className="headerList">
                  <div className="headerListItem active">
                     <FontAwesomeIcon icon={faBed} />
                     <span>Stays</span>
                  </div>
                  <div className="headerListItem">
                     <FontAwesomeIcon icon={faPlane} />
                     <span>Flights</span>
                  </div>
                  <div className="headerListItem">
                     <FontAwesomeIcon icon={faCar} />
                     <span>Car rentals</span>
                  </div>
                  <div className="headerListItem">
                     <FontAwesomeIcon icon={faBed} />
                     <span>Attractions</span>
                  </div>
                  <div className="headerListItem">
                     <FontAwesomeIcon icon={faTaxi} />
                     <span>Airport taxis</span>
                  </div>
               </div>
            </div>
            <h1 className="headerTitle">
               A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
               Get rewarded for your travels - unlock instant savings of 10% of
               mounth with a free Duybooking account.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
               <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                     type="text"
                     placeholder="Where are ypu going?"
                     className="headerSearchInput"
                  />
               </div>

               <div className="headerSearchItem">
                  <FontAwesomeIcon
                     icon={faCalendarDays}
                     className="headerIcon"
                  />
                  <span className="headerSearchText">date to dat</span>
                  <DateRange
                     editableDateInputs={true}
                     onChange={(item) => setDate([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={date}
                  />
               </div>

               <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span className="headerSearchText">
                     2 aduls 2 children 1 room
                  </span>
               </div>
               <div className="headerSearchItem">
                  <div className="headerBtn">Search</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
