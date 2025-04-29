# PublicVehiclePositionsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2PublicVehiclepositionsGet**](#v2publicvehiclepositionsget) | **GET** /v2/public/vehiclepositions | GET All Vehicle Positions|
|[**v2PublicVehiclepositionsVehicleIdGet**](#v2publicvehiclepositionsvehicleidget) | **GET** /v2/public/vehiclepositions/{vehicleId} | GET Vehicle Positions|
|[**v2PublicVehiclepositionsVehicleIdgtfsTripIdGet**](#v2publicvehiclepositionsvehicleidgtfstripidget) | **GET** /v2/public/vehiclepositions/{vehicleId}{gtfsTripId} | GET Vehicle RT data (additional lookup)|

# **v2PublicVehiclepositionsGet**
> V2PublicVehiclepositionsGet200Response v2PublicVehiclepositionsGet()

ℹ️ Note: This endpoint is optimized for client applications serving many users simultaneously. It provides streamlined data structures and caching strategies suitable for client-side consumption. Rate limits can be adjusted upon request - contact us if you need higher limits. Note: Despite the \'public\' prefix, this endpoint requires an API key for access control and usage monitoring. 

### Example

```typescript
import {
    PublicVehiclePositionsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PublicVehiclePositionsV2Api(configuration);

let boundingBox: string; //Filter by bounding box in format \"topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\". Latitude must be in range -90 to 90, longitude in range -180 to 180. Polygons that fit only partialy to selected bounding box are included  (optional) (default to undefined)
let routeShortName: Array<string>; //Filter by short name of route. URL: `?routeShortName=381&routeShortName=X1` (optional) (default to undefined)
let routeType: Array<'tram' | 'metro' | 'train' | 'bus' | 'ferry' | 'funicular' | 'trolleybus'>; //filter by transport type (optional) (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2PublicVehiclepositionsGet(
    boundingBox,
    routeShortName,
    routeType,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boundingBox** | [**string**] | Filter by bounding box in format \&quot;topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\&quot;. Latitude must be in range -90 to 90, longitude in range -180 to 180. Polygons that fit only partialy to selected bounding box are included  | (optional) defaults to undefined|
| **routeShortName** | **Array&lt;string&gt;** | Filter by short name of route. URL: &#x60;?routeShortName&#x3D;381&amp;routeShortName&#x3D;X1&#x60; | (optional) defaults to undefined|
| **routeType** | **Array<&#39;tram&#39; &#124; &#39;metro&#39; &#124; &#39;train&#39; &#124; &#39;bus&#39; &#124; &#39;ferry&#39; &#124; &#39;funicular&#39; &#124; &#39;trolleybus&#39;>** | filter by transport type | (optional) defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2PublicVehiclepositionsGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2PublicVehiclepositionsVehicleIdGet**
> V2PublicVehiclepositionsVehicleIdGet200Response v2PublicVehiclepositionsVehicleIdGet()

ℹ️ Note: This endpoint is optimized for client applications serving many users simultaneously. It provides streamlined data structures and caching strategies suitable for client-side consumption. Rate limits can be adjusted upon request - contact us if you need higher limits. Note: Despite the \'public\' prefix, this endpoint requires an API key for access control and usage monitoring. 

### Example

```typescript
import {
    PublicVehiclePositionsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PublicVehiclePositionsV2Api(configuration);

let vehicleId: string; //Filter result by vehicle ID (same as *vehicle_id* from the `/public/vehiclepositions` EP or *id* from GTFS-RT `VehicleDescriptor`) No stop waypoints are not included. (default to undefined)
let scopes: Array<'info' | 'stop_times' | 'shapes' | 'vehicle_descriptor'>; //Choose which scopes to include in response. (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2PublicVehiclepositionsVehicleIdGet(
    vehicleId,
    scopes,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vehicleId** | [**string**] | Filter result by vehicle ID (same as *vehicle_id* from the &#x60;/public/vehiclepositions&#x60; EP or *id* from GTFS-RT &#x60;VehicleDescriptor&#x60;) No stop waypoints are not included. | defaults to undefined|
| **scopes** | **Array<&#39;info&#39; &#124; &#39;stop_times&#39; &#124; &#39;shapes&#39; &#124; &#39;vehicle_descriptor&#39;>** | Choose which scopes to include in response. | defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2PublicVehiclepositionsVehicleIdGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2PublicVehiclepositionsVehicleIdgtfsTripIdGet**
> V2PublicVehiclepositionsVehicleIdGet200Response v2PublicVehiclepositionsVehicleIdgtfsTripIdGet()

Same as `/public/vehiclepositions/{vehicleId}` but with additional lookup by GTFS trip ID. This may be useful when vehicle is serving the previous trip and you want to get info about the next trip. Combination of `vehicleId` and `gtfsTripId` is needed because multiple vehicles can serve the same trip, and we want to select the correct one. `gtfsTripId` is specified as a path matrix parameter. <br><br>Example: `/public/vehiclepositions/service-3-1001;gtfsTripId=115_107_180501`  ℹ️ Note: This endpoint is optimized for client applications serving many users simultaneously. It provides streamlined data structures and caching strategies suitable for client-side consumption. Rate limits can be adjusted upon request - contact us if you need higher limits. Note: Despite the \'public\' prefix, this endpoint requires an API key for access control and usage monitoring. 

### Example

```typescript
import {
    PublicVehiclePositionsV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PublicVehiclePositionsV2Api(configuration);

let vehicleId: string; //Filter result by vehicle ID (same as *vehicle_id* from the `/public/vehiclepositions` EP or *id* from GTFS-RT `VehicleDescriptor`). (default to undefined)
let gtfsTripId: string; //Perform additional lookup by GTFS trip ID. (default to undefined)
let scopes: Array<'info' | 'stop_times' | 'shapes' | 'vehicle_descriptor'>; //Choose which scopes to include in response. (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2PublicVehiclepositionsVehicleIdgtfsTripIdGet(
    vehicleId,
    gtfsTripId,
    scopes,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vehicleId** | [**string**] | Filter result by vehicle ID (same as *vehicle_id* from the &#x60;/public/vehiclepositions&#x60; EP or *id* from GTFS-RT &#x60;VehicleDescriptor&#x60;). | defaults to undefined|
| **gtfsTripId** | [**string**] | Perform additional lookup by GTFS trip ID. | defaults to undefined|
| **scopes** | **Array<&#39;info&#39; &#124; &#39;stop_times&#39; &#124; &#39;shapes&#39; &#124; &#39;vehicle_descriptor&#39;>** | Choose which scopes to include in response. | defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2PublicVehiclepositionsVehicleIdGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

