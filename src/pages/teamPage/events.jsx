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
    `hbkkr7qgher0ovkhav6kbqkrk0@group.calendar.google.com`
  )
};

const Fire08URLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

const Fire09URLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

const Fire10URLS = {
  Instateam: makeGoogleCalendarURL(
    `6ms68degiksrr01q07ln7uphbg@group.calendar.google.com`
  )
};

const Fire11URLS = {
  Instateam: makeGoogleCalendarURL(
    `ugdek62tseb858f2r5eefp73bc@group.calendar.google.com`
  )
};

const Fire12URLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

export { Fire12URLS, Fire11URLS, Fire10URLS, Fire09URLS, Fire08URLS, Fire07URLS, Fire16UURLS, Fire18UURLS };
