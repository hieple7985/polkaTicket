import React, { ReactElement } from 'react'

import { TicketInfo } from '../../../data/ticket_infos';
import EventListItem from './EventListItem';
import { EventType } from '../../../api/queries';
import LoadingField from '../../LoadingField/LoadingField';

interface Props {
  events: EventType[];
  hideSum?: boolean;
  isIssuer?: boolean;
  loading?: boolean;
}

const EventList: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <>
    {props.loading
    ?
      <LoadingField />
    :
      <>
        {props.events.length > 0 && 
          <div id="ticket-list-wrap">
            {props.events 
            ? props.events.map(event => (
              <div key={event.id}>
                <EventListItem event={event} hideSum={props.hideSum} isIssuer={props.isIssuer}/>
              </div>
            ))
            : <div>Error 404!</div>
          }
          </div>
      }
      </>
    }
    </>
  )
}

export default EventList