# PIDRealtimePositionsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2VehiclepositionsGet**](#v2vehiclepositionsget) | **GET** /v2/vehiclepositions | GET All Vehicle Positions|
|[**v2VehiclepositionsGtfsTripIdGet**](#v2vehiclepositionsgtfstripidget) | **GET** /v2/vehiclepositions/{gtfsTripId} | GET Vehicle Position|

# **v2VehiclepositionsGet**
> V2VehiclepositionsGet200Response v2VehiclepositionsGet()

Positions in one the following states are included by default: - `at_stop` - The position is tracking and the closest anchor point or metro rail track segment is a stop. - `on_track` - The position is tracking, but is neither `at_stop` nor `off_track`.  Using the `includeNotTracking` parameter, positions in one the following states can be additionally included: - `after_track` - The position is not tracking and the trip\'s last known position is tracking. For metro positions, this can also mean that it is tracking, the vehicle is 200+ meters from the closest metro rail track segment of its track and the vehicle\'s message attributes `tm` and `odch` or higher than the arrival to the final stop. For other positions from TCP sources (DPP buses and trams), this can also mean that it is tracking and the vehicle sent a message while at the final stop or sent a message with the `tjr` attribute higher than the arrival to the final stop. - `after_track_delayed` - The same as `after_track`, but the position always has defined delay (not null) if possible to deduct from GTFS static data and origin timestamp. Essentially, it means the vehicle is `at_stop` at the very last stop of the trip. The delay is also propagated to the next trip of the vehicle, unlike the `after_track` state. - `before_track` - The position is not tracking and either the trip\'s previous position is not known, or the previous position\'s state is `at_stop` or `on_track`. - `before_track_delayed` - The position has a delay prediction based on the vehicle\'s previous trip. - `canceled` - The position is canceled. - `off_track` - The position is tracking and the vehicle is 200+ meters from the closest anchor point or metro rail track segment of its track. For metro positions, it is additionally required that the vehicle\'s message attributes `tm` and `odch` or less than or equal to the arrival to the final stop.  Using the `includeNotPublic` parameter, positions in the following state can be additionally included: - `not_public` - The position belongs to a non-public trip (trip without run schedule).  The following states also exist internally but are excluded from the API output: - `duplicate` - The position is not tracking, the trip\'s last known position is tracking and there is another position with identical `origin_timestamp`. - `invisible` - The position is not tracking and either:     - the trip\'s previous position is not known or the previous position\'s state is `at_stop` or `on_track`, and the vehicle is on its way from the garage;     - or the trip\'s last known position is tracking and the vehicle is on its way to the garage. - `mismatched` - The position does not make sense (e.g. it was sent late and thus has a mismatched stop sequence). - `unknown` - The position is not yet processed (or was determined to never be processed) or has been invalidated (e.g. due to a vehicle repeating some part of the trip). 

### Example

```typescript
import {
    PIDRealtimePositionsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDRealtimePositionsV2Api(configuration);

let limit: number; //Limits number of retrieved items. The maximum is 10000. (optional) (default to 100)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let includeNotTracking: boolean; //Enrich result dataset with not tracking trip (those trips not being on track - before and after trip) (optional) (default to undefined)
let includeNotPublic: boolean; //Enrich result dataset with not public trips (trips without run schedule) (optional) (default to false)
let cisTripNumber: number; //Filter result by CIS trip number (optional) (default to undefined)
let preferredTimezone: string; //Preferred timezone offset by given Country/City (use encoded slash sign with `%2F` or use `_` sign) (optional) (default to undefined)
let routeId: string; //Filter result by route id (optional) (default to undefined)
let routeShortName: string; //Filter result by short name (optional) (default to undefined)
let updatedSince: string; //Limit results to the ones updated after (timestamp greater than) (optional) (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2VehiclepositionsGet(
    limit,
    offset,
    includeNotTracking,
    includeNotPublic,
    cisTripNumber,
    preferredTimezone,
    routeId,
    routeShortName,
    updatedSince,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000. | (optional) defaults to 100|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **includeNotTracking** | [**boolean**] | Enrich result dataset with not tracking trip (those trips not being on track - before and after trip) | (optional) defaults to undefined|
| **includeNotPublic** | [**boolean**] | Enrich result dataset with not public trips (trips without run schedule) | (optional) defaults to false|
| **cisTripNumber** | [**number**] | Filter result by CIS trip number | (optional) defaults to undefined|
| **preferredTimezone** | [**string**] | Preferred timezone offset by given Country/City (use encoded slash sign with &#x60;%2F&#x60; or use &#x60;_&#x60; sign) | (optional) defaults to undefined|
| **routeId** | [**string**] | Filter result by route id | (optional) defaults to undefined|
| **routeShortName** | [**string**] | Filter result by short name | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Limit results to the ones updated after (timestamp greater than) | (optional) defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2VehiclepositionsGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  * x-last-modified - Timestamp of the latest resource update. Use it as &#x60;?updatedSince&#x60; query parameter to obtain only newer data than this value. <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2VehiclepositionsGtfsTripIdGet**
> V2VehiclepositionsGet200ResponseFeaturesInner v2VehiclepositionsGtfsTripIdGet()



### Example

```typescript
import {
    PIDRealtimePositionsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDRealtimePositionsV2Api(configuration);

let gtfsTripId: string; //Filter result by trip id (gtfs_trip_id) (default to undefined)
let includeNotTracking: boolean; //Enrich result dataset with not tracking trip (last tracked vehicle after its trip) (optional) (default to undefined)
let includePositions: boolean; //Enrich result dataset with positions (optional) (default to undefined)
let preferredTimezone: string; //Preferred timezone offset by given Country/City (use encoded slash sign by %2F or use _ sign) (optional) (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2VehiclepositionsGtfsTripIdGet(
    gtfsTripId,
    includeNotTracking,
    includePositions,
    preferredTimezone,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gtfsTripId** | [**string**] | Filter result by trip id (gtfs_trip_id) | defaults to undefined|
| **includeNotTracking** | [**boolean**] | Enrich result dataset with not tracking trip (last tracked vehicle after its trip) | (optional) defaults to undefined|
| **includePositions** | [**boolean**] | Enrich result dataset with positions | (optional) defaults to undefined|
| **preferredTimezone** | [**string**] | Preferred timezone offset by given Country/City (use encoded slash sign by %2F or use _ sign) | (optional) defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2VehiclepositionsGet200ResponseFeaturesInner**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

