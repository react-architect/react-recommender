/**
 * The URL of the data-endpoint that collects the data of selected options and achieved objectives
 *
 * @type {string}
 */
export const DEFAULT_URL = "http://localhost:3000/_api";

/**
 * The endpoint to request a recommendation
 * @type {string}
 */
export const RECOMMEND_API = "/recommend";

/**
 * The endpoint to collect the achieved objectives
 * @type {string}
 */
export const REPORT_API = "/report";

/**
 * Default params for fetching-requests
 */
export const FETCH_PARAMS = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
    }
};
