/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const newVisitor = {
    name : name,
    age : age,
    ticketId : ticketId
  }
  return newVisitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
      return 'unknown ticket id';
    case null:
      return 'not sold';
    default:
      return `sold to ${name}`
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
    case null:
      return 'invalid ticket !!!';
    default:
      return tickets[ticketId];
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if(visitor.hasOwnProperty('gtc')){
    return visitor.gtc.version;
  }
}
