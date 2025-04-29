# PIDDepartureBoardsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2PidDepartureboardsGet**](#v2piddepartureboardsget) | **GET** /v2/pid/departureboards | GET Departure Boards|
|[**v2PidInfotextsGet**](#v2pidinfotextsget) | **GET** /v2/pid/infotexts | GET Infotexts (export from the legacy VYMI system)|

# **v2PidDepartureboardsGet**
> PIDDepartureBoard v2PidDepartureboardsGet()

You have to use query parameters `ids`, `cisIds`, `aswIds` or `names` in array format - eg. `ids[]=1&ids[]=3`. **At least one of these IDs is required.** The maximum is 100 stops combined in one request.

### Example

```typescript
import {
    PIDDepartureBoardsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV2Api(configuration);

let ids: string; //Get result by GTFS stop_id. Can be used to retrive individual stops and to separate departures of Prague and intercity routes, even if they depart from the same physical stop. A list of GTFS stops can be found in `stops.txt` file of the [GTFS feed](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F9a6a1d8e-45b9-41de-b9ae-0bcec7126876). (optional) (default to undefined)
let aswIds: string; //Get result by ASW ID. First part of the number represents the whole node. Usually it groups the stops of the same name or all stops associated with a metro station. Also returns related train stations in the node. The second part of the number is optional and represents individual stops in the node. Use `_` instead of `/` as a separator or encode the slash sign with `%2F`. A list of ASW IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). ⚠️ Note: combination with `includeMetroTrains` is currently not supported, see [issue pid#222](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/issues/222). (optional) (default to undefined)
let cisIds: number; //Get result by CIS ID. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). (optional) (default to undefined)
let names: string; //Get results by exact name of stop (case and whitespace sensitive). May return stops of the same name from different towns. Using `names` in combination with other identifiers will return an intersection of stops with `names` and stops of ASW, CIS or GTFS identifiers in the same node. Use this feature to filter out a subset of stops of the same name while guaranteeing them to be from the desired node only. (optional) (default to undefined)
let minutesBefore: number; //Set the start of interval from which to retrieve departures. Positive numbers are set in past relative to the time of request or `timeFrom` timestamp, negative numbers set the start in the future. Use to compensate for walking distance to a stop. Default is set to 0. Maximum value is 30 because of implemented data retention. Minimum value is -4320 (0 - 3 days GTFS calendar maximum). (optional) (default to undefined)
let minutesAfter: number; //Set the end of interval from which to retrieve departures. Positive numbers are set in future relative to the time of request or `timeFrom` timestamp, negative are in the past. The sum of minutesBefore and minutesAfter must be larger than zero. Default is set to 180. Maximum value is 4320 (GTFS calendar maximum). Minimum value is -4350 (0 - 3 days GTFS calendar maximum - 30 minutes data retention). (optional) (default to undefined)
let timeFrom: string; //Set initial timestamp for time interval given by `minutesBefore` and `minutesAfter`. Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - `%3A` for `:`, `%2B` for `.`, `%2F` for `+`. Time zone is set according to the `preferredTimezone` parameter. Applicable range is -6 hours +2 days from now. (optional) (default to undefined)
let includeMetroTrains: boolean; //When selecting a node by `name`, when `true`, will include metro and/or train stops that are a member of the same node. I.e. when querying _Na Knížecí_, setting this to `true` will add the metro station _Anděl_ to results as well because both have the same ASW node number 1040. ⚠️ Note: combination with `aswIds` is currently not supported, see [issue pid#222](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/issues/222). (optional) (default to undefined)
let airCondition: boolean; //Enrich departures with vehicle air condition information. Setting to `false` will force all items to be `null`. Useful for disabling the indication of air condition during cold season. (optional) (default to true)
let preferredTimezone: string; //Preferred timezone offset as defined in the IANA Time zone database in the form of Country/City (use an URL encoded slash sign `%2F` or use an underscore _ symbol), default is Europe/Prague (optional) (default to undefined)
let mode: string; //Valid entries: `departures` (default), `arrivals`, `mixed`. Set how to handle behaviour in end stops. `departures` (default) returns all connections that depart from selected stops (does not return connections for which it is the final stop). `arrivals` returns all connections that arrive into the stops (does not return connections for which it is the first stop). `mixed` returns everything. Use `arrivals` to create dedicated arrival boards. Use `departures` for all other cases. Using `mixed` is not recomended as departures of adjoined routes will be returned twice. (optional) (default to undefined)
let order: string; //Valid entries: `real` (default), `timetable`. Order results by predicted time including trip delay or by timetable time. (optional) (default to undefined)
let filter: string; //Valid entries: `none` (default), `routeOnce`, `routeOnceFill`, `routeHeadingOnce`, `routeHeadingOnceFill`, `routeHeadingOnceNoGap`, `routeHeadingOnceNoGapFill`. Defines how should be the list of departures returned. `none` returns all departures within the time and item limit. `routeOnce` returns exactly one occurence of departure for each `route_id`. Works best when querying a single stop. `routeHeadingOnce` returns one entry for each pair of `route_id` and `trip_headsign`, i.e. returns departures for routes that have multiple end stops. Works well when quering one or more stops in a node. `...NoGap` will ensure that departures with a distinct trip headsign will not be displayed if they should arrive too far in the future. `...Fill` attributes will behave the same as their namesakes but afterwards will fill the rest of request up to `total/limit` with further departures. Use to have every line/destination represented and have the display filled with departures at the same time. (optional) (default to undefined)
let skip: 'canceled' | 'atStop' | 'untracked' | 'missing'; //Filters out trips matching the given states. Multiple filters can be applied using array syntax, e.g., `&skip[]=canceled&skip[]=atStop`. Using both `untracked` and `missing` will exclude all untracked vehicles, as missing vehicles are a subset of untracked vehicles. We recommend using `missing` instead of `untracked`, as skipping all untracked vehicles may result in departures not appearing in the API response until the last few minutes before departure, especially for departure boards near the starting station/stop.  (optional) (default to undefined)
let limit: number; //Limits the number of items in response. The maximum is 1000 (default value is 20). (optional) (default to undefined)
let total: number; //Sets the number of items that will be queried. Use in conjunction with `offset`. Up to `total - offset`, but not more than `limit` items will be then returned. If unset, is same as `limit`. The maximum is 1000 (default value is 20). (optional) (default to undefined)
let offset: number; //Number of the initial departures that are skipped. Useful for multi-page displays. (optional) (default to undefined)

const { status, data } = await apiInstance.v2PidDepartureboardsGet(
    ids,
    aswIds,
    cisIds,
    names,
    minutesBefore,
    minutesAfter,
    timeFrom,
    includeMetroTrains,
    airCondition,
    preferredTimezone,
    mode,
    order,
    filter,
    skip,
    limit,
    total,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ids** | [**string**] | Get result by GTFS stop_id. Can be used to retrive individual stops and to separate departures of Prague and intercity routes, even if they depart from the same physical stop. A list of GTFS stops can be found in &#x60;stops.txt&#x60; file of the [GTFS feed](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F9a6a1d8e-45b9-41de-b9ae-0bcec7126876). | (optional) defaults to undefined|
| **aswIds** | [**string**] | Get result by ASW ID. First part of the number represents the whole node. Usually it groups the stops of the same name or all stops associated with a metro station. Also returns related train stations in the node. The second part of the number is optional and represents individual stops in the node. Use &#x60;_&#x60; instead of &#x60;/&#x60; as a separator or encode the slash sign with &#x60;%2F&#x60;. A list of ASW IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). ⚠️ Note: combination with &#x60;includeMetroTrains&#x60; is currently not supported, see [issue pid#222](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/issues/222). | (optional) defaults to undefined|
| **cisIds** | [**number**] | Get result by CIS ID. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). | (optional) defaults to undefined|
| **names** | [**string**] | Get results by exact name of stop (case and whitespace sensitive). May return stops of the same name from different towns. Using &#x60;names&#x60; in combination with other identifiers will return an intersection of stops with &#x60;names&#x60; and stops of ASW, CIS or GTFS identifiers in the same node. Use this feature to filter out a subset of stops of the same name while guaranteeing them to be from the desired node only. | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Set the start of interval from which to retrieve departures. Positive numbers are set in past relative to the time of request or &#x60;timeFrom&#x60; timestamp, negative numbers set the start in the future. Use to compensate for walking distance to a stop. Default is set to 0. Maximum value is 30 because of implemented data retention. Minimum value is -4320 (0 - 3 days GTFS calendar maximum). | (optional) defaults to undefined|
| **minutesAfter** | [**number**] | Set the end of interval from which to retrieve departures. Positive numbers are set in future relative to the time of request or &#x60;timeFrom&#x60; timestamp, negative are in the past. The sum of minutesBefore and minutesAfter must be larger than zero. Default is set to 180. Maximum value is 4320 (GTFS calendar maximum). Minimum value is -4350 (0 - 3 days GTFS calendar maximum - 30 minutes data retention). | (optional) defaults to undefined|
| **timeFrom** | [**string**] | Set initial timestamp for time interval given by &#x60;minutesBefore&#x60; and &#x60;minutesAfter&#x60;. Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - &#x60;%3A&#x60; for &#x60;:&#x60;, &#x60;%2B&#x60; for &#x60;.&#x60;, &#x60;%2F&#x60; for &#x60;+&#x60;. Time zone is set according to the &#x60;preferredTimezone&#x60; parameter. Applicable range is -6 hours +2 days from now. | (optional) defaults to undefined|
| **includeMetroTrains** | [**boolean**] | When selecting a node by &#x60;name&#x60;, when &#x60;true&#x60;, will include metro and/or train stops that are a member of the same node. I.e. when querying _Na Knížecí_, setting this to &#x60;true&#x60; will add the metro station _Anděl_ to results as well because both have the same ASW node number 1040. ⚠️ Note: combination with &#x60;aswIds&#x60; is currently not supported, see [issue pid#222](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/issues/222). | (optional) defaults to undefined|
| **airCondition** | [**boolean**] | Enrich departures with vehicle air condition information. Setting to &#x60;false&#x60; will force all items to be &#x60;null&#x60;. Useful for disabling the indication of air condition during cold season. | (optional) defaults to true|
| **preferredTimezone** | [**string**] | Preferred timezone offset as defined in the IANA Time zone database in the form of Country/City (use an URL encoded slash sign &#x60;%2F&#x60; or use an underscore _ symbol), default is Europe/Prague | (optional) defaults to undefined|
| **mode** | [**string**] | Valid entries: &#x60;departures&#x60; (default), &#x60;arrivals&#x60;, &#x60;mixed&#x60;. Set how to handle behaviour in end stops. &#x60;departures&#x60; (default) returns all connections that depart from selected stops (does not return connections for which it is the final stop). &#x60;arrivals&#x60; returns all connections that arrive into the stops (does not return connections for which it is the first stop). &#x60;mixed&#x60; returns everything. Use &#x60;arrivals&#x60; to create dedicated arrival boards. Use &#x60;departures&#x60; for all other cases. Using &#x60;mixed&#x60; is not recomended as departures of adjoined routes will be returned twice. | (optional) defaults to undefined|
| **order** | [**string**] | Valid entries: &#x60;real&#x60; (default), &#x60;timetable&#x60;. Order results by predicted time including trip delay or by timetable time. | (optional) defaults to undefined|
| **filter** | [**string**] | Valid entries: &#x60;none&#x60; (default), &#x60;routeOnce&#x60;, &#x60;routeOnceFill&#x60;, &#x60;routeHeadingOnce&#x60;, &#x60;routeHeadingOnceFill&#x60;, &#x60;routeHeadingOnceNoGap&#x60;, &#x60;routeHeadingOnceNoGapFill&#x60;. Defines how should be the list of departures returned. &#x60;none&#x60; returns all departures within the time and item limit. &#x60;routeOnce&#x60; returns exactly one occurence of departure for each &#x60;route_id&#x60;. Works best when querying a single stop. &#x60;routeHeadingOnce&#x60; returns one entry for each pair of &#x60;route_id&#x60; and &#x60;trip_headsign&#x60;, i.e. returns departures for routes that have multiple end stops. Works well when quering one or more stops in a node. &#x60;...NoGap&#x60; will ensure that departures with a distinct trip headsign will not be displayed if they should arrive too far in the future. &#x60;...Fill&#x60; attributes will behave the same as their namesakes but afterwards will fill the rest of request up to &#x60;total/limit&#x60; with further departures. Use to have every line/destination represented and have the display filled with departures at the same time. | (optional) defaults to undefined|
| **skip** | [**&#39;canceled&#39; | &#39;atStop&#39; | &#39;untracked&#39; | &#39;missing&#39;**]**Array<&#39;canceled&#39; &#124; &#39;atStop&#39; &#124; &#39;untracked&#39; &#124; &#39;missing&#39;>** | Filters out trips matching the given states. Multiple filters can be applied using array syntax, e.g., &#x60;&amp;skip[]&#x3D;canceled&amp;skip[]&#x3D;atStop&#x60;. Using both &#x60;untracked&#x60; and &#x60;missing&#x60; will exclude all untracked vehicles, as missing vehicles are a subset of untracked vehicles. We recommend using &#x60;missing&#x60; instead of &#x60;untracked&#x60;, as skipping all untracked vehicles may result in departures not appearing in the API response until the last few minutes before departure, especially for departure boards near the starting station/stop.  | (optional) defaults to undefined|
| **limit** | [**number**] | Limits the number of items in response. The maximum is 1000 (default value is 20). | (optional) defaults to undefined|
| **total** | [**number**] | Sets the number of items that will be queried. Use in conjunction with &#x60;offset&#x60;. Up to &#x60;total - offset&#x60;, but not more than &#x60;limit&#x60; items will be then returned. If unset, is same as &#x60;limit&#x60;. The maximum is 1000 (default value is 20). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the initial departures that are skipped. Useful for multi-page displays. | (optional) defaults to undefined|


### Return type

**PIDDepartureBoard**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Can return empty data in departures property (empty array []) if no departures were found |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2PidInfotextsGet**
> Array<V2PidInfotextsGet200ResponseInner> v2PidInfotextsGet()



### Example

```typescript
import {
    PIDDepartureBoardsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV2Api(configuration);

const { status, data } = await apiInstance.v2PidInfotextsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<V2PidInfotextsGet200ResponseInner>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all active infotexts |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

