/**
 * 공개적으로 허용된 경로 (로그인 없이 접근 가능한 경로)
 */
export const publicRoutes = ["/"];

/**
 * 인증이 필요한 경로 (로그인이 필요한 경로)
 *
 */
export const authRoutes = ["/login", "/register", "/error"];

export const apiAuthPrefix = "/api/auth";

/**
 * 로그인 후 리다이렉트 할 경로
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT_URL = "/settings";
