import React from 'react'
import { useParams } from 'react-router-dom';
import SubHeader from '../../components/SubHeader/SubHeader';
import tickets, { Ticket } from '../../data/tickets';

import IMG_UPGRADE from '../../assets/images/upgrade-ticket.png'

const UpgradeTicket = () => {
  const {id} = useParams();
  const ticket: Ticket | undefined = id ? tickets.find(ticket => ticket.id === parseInt(id)) : undefined;
  return (
    <>
    {ticket
    ?
      <>
        <div className='wrap border-x-only'>
        <section className='container'>
          <SubHeader pageName="Upgrade Ticket" rootURL={`/user/bought_ticket/${id}`} />
          <div className='mt-24'>
            <div className='text-center w-full'>
              <p className='font-semibold'>
                To upgrade your ticket from a single-use ticket to a multi-use ticket. 
                You need <span className='text-primaryColor'> 30 XTZ</span> to upgrade ticket
              </p>
            </div>
            <div className='w-2/5 mx-auto mt-16'>
              <img src={IMG_UPGRADE} alt="Upgrade Ticket" />
            </div>
          </div>
        </section>
        <section 
          className='fixed-comp sub-footer'
        >
          <div className='footer-full-w-btn w-11/12'>
            <button 
              className='primary-btn'
            >
              Upgrade
            </button>
            <button 
              className='secondary-btn mt-4'
            >
              Cancel
            </button>
          </div>
        </section>
      </div>
      </>
    :
      <div>Error 404!</div>
    }
    </>
  )
}

export default UpgradeTicket