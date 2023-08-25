import { useFormatter } from 'next-intl';

import React, { Fragment, useEffect, useState } from 'react';

import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { formatDate } from '@fullcalendar/core';

import Main from 'layouts/Main';
import { getPublicEvents } from 'services/contentApi';
import { GroupedEvents, Event } from 'types/events';

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
                        details: event,
                    });
                });
            });
            setEventList(evts);
        }
    };

    const renderEventContent = (eventInfo: any) => {
        console.log('eventInfo', eventInfo.event);
        return (
            <Stack>
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
            </Stack>
        );
    };

    useEffect(() => {
        getEventsAsync();
    }, []);

    useEffect(() => {
        if (selectedEvent) console.log('selectedEvent', selectedEvent);
    }, [selectedEvent]);

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Modal
                open={selectedEvent !== null}
                onClose={() => setSelectedEvent(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
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
                                eventTimeFormat={{
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    meridiem: false,
                                }}
                                headerToolbar={{
                                    start: 'today', // will normally be on the left. if RTL, will be on the right
                                    center: 'title',
                                    end: 'prev,next', // will normally be on the right. if RTL, will be on the left
                                }}
                                footerToolbar={{
                                    start: 'today', // will normally be on the left. if RTL, will be on the right
                                    end: 'prev,next', // will normally be on the right. if RTL, will be on the left
                                }}
                                buttonText={{
                                    today: 'Today',
                                    month: 'month',
                                    week: 'week',
                                    day: 'day',
                                    list: 'list',
                                }}
                                plugins={[dayGridPlugin, timeGridPlugin]}
                                initialView="dayGridMonth"
                                slotMinTime="06:00:00"
                                slotMaxTime="22:00:00"
                                initialDate={new Date()}
                                events={eventList}
                                firstDay={0}
                                eventClick={(info: any) => {
                                    info.jsEvent.preventDefault();
                                    const found = eventList.find((e: any) => info.event.id === e.id);
                                    setSelectedEvent(found.details);
                                }}
                                eventContent={renderEventContent}
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
