const API_KEY = `${process.env.REACT_APP_API_KEY}`;

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events` +
  `?singleEvents=true&key=${API_KEY}`;

const Fire14UURLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire16UURLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire12UURLS = {
  Instateam: makeGoogleCalendarURL(
    `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

export { Fire14UURLS, Fire12UURLS, Fire16UURLS };
