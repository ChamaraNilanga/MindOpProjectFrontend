import React, { Component, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link, useSearchParams } from 'react-router-dom'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'




  const chatTeacher = () => {
 
  return (
    <div>
      <div>
        <div className='mt-2'>
          <div className='table-web'>
            <table class='table'>
              <thead class='b-priamry t-light'>
                <tr>
                  <th scope='col'>Booking ID</th>
                  <th scope='col'>Hotel Name</th>
                  <th scope='col'>To be checking</th>
                  <th scope='col'>Edit</th>
                  <th scope='col'>Booking Info</th>
                </tr>
              </thead>
             </table>
             </div>
             </div>
             </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  )
                }
export default chatTeacher;
