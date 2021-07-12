const API_KEY = `${process.env.REACT_APP_API_KEY}`;

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events` +
  `?singleEvents=true&key=${API_KEY}`;

const Fire18UURLS = {
  Instateam: makeGoogleCalendarURL(
    `hbkkr7qgher0ovkhav6kbqkrk0@group.calendar.google.com`
  )
};

const Fire16UURLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire07URLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire08URLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire12UURLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

const Fire10UURLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

const Fire8UURLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

export { Fire8UURLS, Fire10UURLS, Fire12UURLS, Fire08URLS, Fire07URLS, Fire16UURLS, Fire18UURLS };
