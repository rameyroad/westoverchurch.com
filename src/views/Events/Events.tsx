import { useFormatter } from 'next-intl';

import React, { Fragment, useEffect, useState } from 'react';

import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import { formatDate } from '@fullcalendar/core';

import Main from 'layouts/Main';
import { getPublicEvents } from 'services/contentApi';
import { GroupedEvents, Event } from 'types/events';
import Link from 'next/link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Events = (): JSX.Element => {
    const format = useFormatter();
    const [eventList, setEventList] = useState<any | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const getTextColor = (event: Event) => {
        switch (event.eventTypeKey) {
            case 1:
                return '#fefefe';
            case 2:
                return '#fefefe';
            case 3:
                return '#fefefe';
            case 4:
                return '#fefefe';
        }
    };

    const getBackgroundColor = (event: Event) => {
        switch (event.eventTypeKey) {
            case 1:
                return '#5e87f5';
            case 2:
                return '#3d4b91';
            case 3:
                return '#800080';
            case 4:
                return '#800080';
        }
    };

    const getEventsAsync = async () => {
        const evts: Array<any> = [];
        const allEvents = await getPublicEvents();

        if (allEvents && allEvents.length) {
            allEvents.map((group: GroupedEvents, g: number) => {
                group?.events.map((event: Event, e: number) => {
                    evts.push({
                        url: '#',
                        id: event.eventDataId,
                        title: event.title,
                        groupId: event.ministry?.name ?? event.ministryId,
                        start: event.startDateTime,
                        end: event.endDateTime,
                        backgroundColor: getBackgroundColor(event),
                        borderColor: '#FFFFFF',
                        textColor: getTextColor(event),
                        details: event,
                    });
                });
            });
            setEventList(evts);
        }
    };

    const renderEventContent = (eventInfo: any) => {
        return (
            <Stack
                sx={{ backgroundColor: `${eventInfo.backgroundColor}`, p: '5px', color: `${eventInfo.textColor}`, borderRadius: 1, width: 'auto' }}
            >
                <Link href={''} style={{ color: `${eventInfo.textColor}` }}>
                    <Typography fontSize={14} fontWeight={700}>
                        {eventInfo.event.title}
                    </Typography>
                    <Typography fontSize={12} fontWeight={300}>
                        {eventInfo.timeText}
                    </Typography>
                    {eventInfo.event.groupId && (
                        <Typography fontSize={12} fontWeight={300}>
                            ({eventInfo.event.groupId})
                        </Typography>
                    )}
                </Link>
            </Stack>
        );
    };

    useEffect(() => {
        getEventsAsync();
    }, []);

    useEffect(() => {}, [selectedEvent]);

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Modal
                open={selectedEvent !== null}
                onClose={() => setSelectedEvent(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Typography id="modal-modal-title" variant="h5">
                        {selectedEvent?.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="body1">
                        {selectedEvent?.description}
                        <br />
                        {formatDate(selectedEvent?.startDateTime, {
                            month: 'short',
                            year: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            locale: 'en',
                        })}{' '}
                        -{' '}
                        {formatDate(selectedEvent?.endDateTime, {
                            hour: 'numeric',
                            minute: 'numeric',
                            locale: 'en',
                        })}
                    </Typography>
                </Box>
            </Modal>
            <Main bgcolor={'background.paper'}>
                <Container>
                    <Box sx={{ mt: 2, mb: 2 }}>
                        {eventList && (
                            <FullCalendar
                                plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                eventTimeFormat={{
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    meridiem: false,
                                }}
                                headerToolbar={{
                                    // start: 'today prev,next',
                                    start: 'title',
                                    end: 'dayGridMonth,dayGridWeek,listDay',
                                }}
                                footerToolbar={{
                                    start: '', // will normally be on the left. if RTL, will be on the right
                                    end: 'today prev,next', // will normally be on the right. if RTL, will be on the left
                                }}
                                buttonText={{
                                    today: 'Today',
                                    month: 'Month',
                                    week: 'Week',
                                    list: 'Day',
                                }}
                                editable={true}
                                selectable={true}
                                // selectMirror={true}
                                // dayMaxEvents={true}
                                select={(info: any) => {
                                    console.log('eventsSet', info);
                                }}
                                eventContent={renderEventContent} // custom render function
                                eventsSet={(info: any) => {
                                    console.log('eventsSet', info);
                                }} // called after events are initialized/added/changed/removed
                                slotMinTime="06:00:00"
                                slotMaxTime="22:00:00"
                                initialDate={new Date()}
                                navLinks={true}
                                dateClick={(info: any) => {
                                    console.log('selected', info);
                                }}
                                events={eventList}
                                eventClick={(info: any) => {
                                    info.jsEvent.preventDefault();
                                    const found = eventList.find((e: any) => info.event.id === e.id);
                                    setSelectedEvent(found.details);
                                }}
                                firstDay={0}
                                contentHeight={1000}
                                themeSystem="bootstrap5"
                            />
                        )}
                    </Box>
                </Container>
            </Main>
        </Box>
    );
};

export default Events;
