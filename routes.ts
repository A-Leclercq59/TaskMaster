/**
 * An array of routes that are accessible to the public
 * Theses routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are use for authentication
 * Theses routes will redirect logged is users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirectpath after logging is
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
