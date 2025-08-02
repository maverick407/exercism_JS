// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let currDate;
  if(now){
    currDate = new Date(now);
  }else{
    currDate = new Date();
  }
  currDate.setDate(currDate.getDate() + days);
  return currDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const dt = new Date(timestamp);
  return {
    year : dt.getFullYear(),
    month : dt.getMonth(),
    date: dt.getDate(),
    hour: dt.getHours(),
    minute : dt.getMinutes()
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let dt = new Date(timestamp);

  if (options.year !== undefined) dt.setFullYear(options.year);
  if (options.month !== undefined) dt.setMonth(options.month);
  if (options.date !== undefined) dt.setDate(options.date);
  if (options.hour !== undefined) dt.setHours(options.hour);
  if (options.minute !== undefined) dt.setMinutes(options.minute);

  return {
    year: dt.getFullYear(),
    month: dt.getMonth(),
    date: dt.getDate(),
    hour: dt.getHours(),
    minute: dt.getMinutes()
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const t1 = new Date(timestampA);
  const t2 = new Date(timestampB);

  const diff = Math.abs(t2-t1);
  return Math.round(diff / 1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const d1 = new Date(appointmentTimestamp);
  const d2 = new Date(currentTimestamp);

  return d1 > d2;
}
