# PIDDepartureBoardsV4Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v4PidTransferboardsGet**](#v4pidtransferboardsget) | **GET** /v4/pid/transferboards | GET Transfer Boards|

# **v4PidTransferboardsGet**
> V4PidTransferboardsGet200Response v4PidTransferboardsGet()


### Example

```typescript
import {
    PIDDepartureBoardsV4Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV4Api(configuration);

let routeType: 0 | 1 | 2 | 3 | 4 | 7 | 11; //Transport type of the route in which the transfer is planned. This parameter is required to distinguish between different vehicle types, as trams and buses can share the same registration number. The value is represented by the following enum from GTFS: - 0: Tram - 1: Subway - 2: Train - 3: Bus - 4: Ferry - 7: Funicular - 11: Trolleybus For example, if you want to get a tram with registration number \"1001\", use routeType=0. For a bus with the same registration number, use routeType=3.  (default to undefined)
let cisId: number; //CIS identifier of the stop or node. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). Includes departures from all stops at the given CIS ID. Required if `aswId` is not provided. Only one of `cisId` or `aswId` can be used.  (optional) (default to undefined)
let aswId: string; //ASW identifier of the stop. The format is `nodeId/stopId` where stopId is not mandatory. You can use `_` instead of `/` or encode the slash sign with `%2F`, Includes departures from the given stop, plus from all stops at the given node (1330_1 -> 1330 -> 1330_1, 1330_2, ...), plus from all stops sharing the same name. Departures from associated metro and train stations are also included (Na Knížecí -> Anděl). Required if `cisId` is not provided. Only one of `cisId` or `aswId` can be used.  (optional) (default to undefined)
let tripNumber: number; //Trip number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific trip. Represents the numeric part of the GTFS `trip_short_name` (`Os 2547` -> `2547`). Generally, `trip_short_name` is available only for train services. Required if `vehicleRegistrationNumber` is not provided. Only one of `tripNumber` or `vehicleRegistrationNumber` can be used.  (optional) (default to undefined)
let vehicleRegistrationNumber: string; //Registration number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific vehicle. Required if `tripNumber` is not provided. Only one of `tripNumber` or `vehicleRegistrationNumber` can be used.  (optional) (default to undefined)
let timeFrom: string; //Set initial timestamp for time interval given by `minutesBefore` (hardcoded to 0) and `minutesAfter` (hardcoded to 60). Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - `%3A` for `:`, `%2B` for `.`, `%2F` for `+`. Time zone is set to `Europe/Prague`. Applicable range is -6 hours +2 days from now.  (optional) (default to undefined)
let limit: number; //Limit the number of rows of departures returned. The total number of departures is a union across individual types of departures. The default value is 8. The maximum value is 30.  (optional) (default to 8)

const { status, data } = await apiInstance.v4PidTransferboardsGet(
    routeType,
    cisId,
    aswId,
    tripNumber,
    vehicleRegistrationNumber,
    timeFrom,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **routeType** | [**0 | 1 | 2 | 3 | 4 | 7 | 11**]**Array<0 &#124; 1 &#124; 2 &#124; 3 &#124; 4 &#124; 7 &#124; 11>** | Transport type of the route in which the transfer is planned. This parameter is required to distinguish between different vehicle types, as trams and buses can share the same registration number. The value is represented by the following enum from GTFS: - 0: Tram - 1: Subway - 2: Train - 3: Bus - 4: Ferry - 7: Funicular - 11: Trolleybus For example, if you want to get a tram with registration number \&quot;1001\&quot;, use routeType&#x3D;0. For a bus with the same registration number, use routeType&#x3D;3.  | defaults to undefined|
| **cisId** | [**number**] | CIS identifier of the stop or node. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). Includes departures from all stops at the given CIS ID. Required if &#x60;aswId&#x60; is not provided. Only one of &#x60;cisId&#x60; or &#x60;aswId&#x60; can be used.  | (optional) defaults to undefined|
| **aswId** | [**string**] | ASW identifier of the stop. The format is &#x60;nodeId/stopId&#x60; where stopId is not mandatory. You can use &#x60;_&#x60; instead of &#x60;/&#x60; or encode the slash sign with &#x60;%2F&#x60;, Includes departures from the given stop, plus from all stops at the given node (1330_1 -&gt; 1330 -&gt; 1330_1, 1330_2, ...), plus from all stops sharing the same name. Departures from associated metro and train stations are also included (Na Knížecí -&gt; Anděl). Required if &#x60;cisId&#x60; is not provided. Only one of &#x60;cisId&#x60; or &#x60;aswId&#x60; can be used.  | (optional) defaults to undefined|
| **tripNumber** | [**number**] | Trip number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific trip. Represents the numeric part of the GTFS &#x60;trip_short_name&#x60; (&#x60;Os 2547&#x60; -&gt; &#x60;2547&#x60;). Generally, &#x60;trip_short_name&#x60; is available only for train services. Required if &#x60;vehicleRegistrationNumber&#x60; is not provided. Only one of &#x60;tripNumber&#x60; or &#x60;vehicleRegistrationNumber&#x60; can be used.  | (optional) defaults to undefined|
| **vehicleRegistrationNumber** | [**string**] | Registration number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific vehicle. Required if &#x60;tripNumber&#x60; is not provided. Only one of &#x60;tripNumber&#x60; or &#x60;vehicleRegistrationNumber&#x60; can be used.  | (optional) defaults to undefined|
| **timeFrom** | [**string**] | Set initial timestamp for time interval given by &#x60;minutesBefore&#x60; (hardcoded to 0) and &#x60;minutesAfter&#x60; (hardcoded to 60). Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - &#x60;%3A&#x60; for &#x60;:&#x60;, &#x60;%2B&#x60; for &#x60;.&#x60;, &#x60;%2F&#x60; for &#x60;+&#x60;. Time zone is set to &#x60;Europe/Prague&#x60;. Applicable range is -6 hours +2 days from now.  | (optional) defaults to undefined|
| **limit** | [**number**] | Limit the number of rows of departures returned. The total number of departures is a union across individual types of departures. The default value is 8. The maximum value is 30.  | (optional) defaults to 8|


### Return type

**V4PidTransferboardsGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of possible transfers at the provided stop/node (identified by cisId or aswId) |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request - invalid query parameters, including: * &#x60;cisId&#x60; and &#x60;aswId&#x60; are missing or invalid * Both &#x60;cisId&#x60; and &#x60;aswId&#x60; are provided * &#x60;timeFrom&#x60; is invalid or out of range  |  -  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found - no valid GTFS stop found for the given CIS ID or ASW ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

