const API_KEY = `${process.env.API_KEY}`;

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events` +
  `?singleEvents=true&key=${API_KEY}`;

const Fire14UURLS = {
  Instateam: makeGoogleCalendarURL(
    `cdr7o2fqa1hfg5uhlq6raaso38@group.calendar.google.com`
  )
};

const Fire12UURLS = {
  Instateam: makeGoogleCalendarURL(
    `tuho6kdmemdjdv0n24eg09mtnc@group.calendar.google.com`
  )
};

export { Fire14UURLS, Fire12UURLS };
