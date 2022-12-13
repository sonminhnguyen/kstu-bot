import React, { useEffect, useState } from 'react';
import { EventInput } from '@fullcalendar/react';

import FullCalendar, { DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import PageContent from '@/components/PageContent';
// import { database } from './event-utils';
import EventModal from './EventModal';
import { getEvents } from '../../data/database'
import { Button } from 'rsuite';

const Calendar = () => {
  const [database, setDatabase] = useState<EventInput[] | any>([])
  const [editable, setEditable] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Object[] | any>({})
  
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // console.log(selectInfo);
    setEditable(true);
    setSelectedDate(selectInfo)
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    // console.log(clickInfo);
    // setEditable(true);
    // setSelectedDate(clickInfo)

  };

  const renderEventContent = (eventContent: EventContentArg) => {
    const { timeText, event } = eventContent;
    const handleDelete = () => {
      
      // console.log(database);
      // console.log(event.id);
      // database.map(data => console.log(data.id)
      // )
      const newDatabase = database.filter(data=> data.id !== parseInt(event.id))
      const updatedID = newDatabase.map(data => {
        if(data.id > parseInt(event.id)) {
          return {...data, id: data.id - 1}
        }
        return data;
      })
      // console.log(updatedID);
      setDatabase(updatedID);
    }
    return (
      <>
        {timeText && (
          <>
            <div className="fc-daygrid-event-dot"></div>
            <div className="fc-event-time">{eventContent.timeText}</div>
          </>
        )}
        <div className="fc-event-title">{event.title}</div>
        <Button type="button"  className="fc-event-time" onClick={handleDelete}>X</Button>
      </>
    );
  }

  useEffect(() => {
    getEvents().then(data => setDatabase(data))
  }, [])

  if(database.length !== 0) {
    return (
        <PageContent className="calendar-app">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="dayGridMonth"
            weekends
            editable
            selectable
            selectMirror
            dayMaxEvents
            nextDayThreshold={'09:00:00'}
            events={database} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
          />
          <EventModal
            database={database}
            setDatabase={setDatabase}
            selectedDate={selectedDate}
            open={editable}
            onClose={() => setEditable(false)}
            onAddEvent={() => {
              setEditable(false);
            }}
          />
        </PageContent>
    );
  }
  
};



export default Calendar;
