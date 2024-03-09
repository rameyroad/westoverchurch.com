export interface Event {
    eventDataId: string;
    title: string;
    description: string;
    startDateTime: Date;
    endDateTime: Date;
    eventTypeKey: number;
    locationId: string;
    ministryId: string;
    subLocation: string;
    bannerImg: string;
    speaker: string;
    location: Location;
    ministry: Ministry;
}

export interface Location {
    locationDataId: string;
    title: string;
    description: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
}

export interface Ministry {
    id: string;
    name: string;
    description: string;
}

export interface GroupedEvents {
    startDate: Date;
    events: Array<Event>;
}
