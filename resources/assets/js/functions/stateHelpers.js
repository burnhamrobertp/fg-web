/**
 * User is both logged in and e-mail verified
 *
 * @param state
 * @returns {boolean}
 */
export function userIsVerified(state) {
    return typeof state.user.id === 'number' && state.user.verified === 1;
}