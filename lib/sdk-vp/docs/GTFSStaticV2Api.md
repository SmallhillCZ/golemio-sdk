# GTFSStaticV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2GtfsRoutesGet**](#v2gtfsroutesget) | **GET** /v2/gtfs/routes | GET All GTFS Routes|
|[**v2GtfsRoutesIdGet**](#v2gtfsroutesidget) | **GET** /v2/gtfs/routes/{id} | GET GTFS Route|
|[**v2GtfsServicesGet**](#v2gtfsservicesget) | **GET** /v2/gtfs/services | GET GTFS Services|
|[**v2GtfsShapesIdGet**](#v2gtfsshapesidget) | **GET** /v2/gtfs/shapes/{id} | GET GTFS Shape|
|[**v2GtfsStopsGet**](#v2gtfsstopsget) | **GET** /v2/gtfs/stops | GET All GTFS Stops|
|[**v2GtfsStopsIdGet**](#v2gtfsstopsidget) | **GET** /v2/gtfs/stops/{id} | GET GTFS Stop|
|[**v2GtfsStoptimesIdGet**](#v2gtfsstoptimesidget) | **GET** /v2/gtfs/stoptimes/{id} | GET GTFS Stop times|
|[**v2GtfsTripsGet**](#v2gtfstripsget) | **GET** /v2/gtfs/trips | GET All GTFS Trips|
|[**v2GtfsTripsIdGet**](#v2gtfstripsidget) | **GET** /v2/gtfs/trips/{id} | GET GTFS Trip|

# **v2GtfsRoutesGet**
> Array<GTFSRoute> v2GtfsRoutesGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsRoutesGet(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**Array<GTFSRoute>**

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

# **v2GtfsRoutesIdGet**
> GTFSRoute v2GtfsRoutesIdGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.v2GtfsRoutesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GTFSRoute**

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

# **v2GtfsServicesGet**
> Array<GTFSService> v2GtfsServicesGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let date: string; //Filter services by specific date in format (YYYY-MM-DD). (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsServicesGet(
    date,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Filter services by specific date in format (YYYY-MM-DD). | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**Array<GTFSService>**

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

# **v2GtfsShapesIdGet**
> V2GtfsShapesIdGet200Response v2GtfsShapesIdGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.v2GtfsShapesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**V2GtfsShapesIdGet200Response**

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

# **v2GtfsStopsGet**
> V2GtfsStopsGet200Response v2GtfsStopsGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let names: string; //Name of station. Use with square brackets `names[]=NAME1&names[]=NAME2`. (optional) (default to undefined)
let ids: string; //Get stops by stop_id. Use with square brackets `ids[]`. (optional) (default to undefined)
let aswIds: string; //Get stops by ASW, use `_` instead of `/` or encode the slash sign with `%2F`. Use with square brackets `aswId[]`. (optional) (default to undefined)
let cisIds: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsStopsGet(
    names,
    ids,
    aswIds,
    cisIds,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **names** | [**string**] | Name of station. Use with square brackets &#x60;names[]&#x3D;NAME1&amp;names[]&#x3D;NAME2&#x60;. | (optional) defaults to undefined|
| **ids** | [**string**] | Get stops by stop_id. Use with square brackets &#x60;ids[]&#x60;. | (optional) defaults to undefined|
| **aswIds** | [**string**] | Get stops by ASW, use &#x60;_&#x60; instead of &#x60;/&#x60; or encode the slash sign with &#x60;%2F&#x60;. Use with square brackets &#x60;aswId[]&#x60;. | (optional) defaults to undefined|
| **cisIds** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**V2GtfsStopsGet200Response**

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

# **v2GtfsStopsIdGet**
> V2GtfsStopsGet200ResponseFeaturesInner v2GtfsStopsIdGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.v2GtfsStopsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**V2GtfsStopsGet200ResponseFeaturesInner**

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

# **v2GtfsStoptimesIdGet**
> Array<GTFSStopTime> v2GtfsStoptimesIdGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let id: string; // (default to undefined)
let date: string; //Filter stop times by specific date in format (YYYY-MM-DD). (optional) (default to undefined)
let from: string; //Filter stop times by time departure in format (H:mm:ss). (optional) (default to undefined)
let to: string; //Filter stop times by time arrival in format (H:mm:ss). (optional) (default to undefined)
let includeStop: boolean; //Enrich stop times response object with stop. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsStoptimesIdGet(
    id,
    date,
    from,
    to,
    includeStop,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **date** | [**string**] | Filter stop times by specific date in format (YYYY-MM-DD). | (optional) defaults to undefined|
| **from** | [**string**] | Filter stop times by time departure in format (H:mm:ss). | (optional) defaults to undefined|
| **to** | [**string**] | Filter stop times by time arrival in format (H:mm:ss). | (optional) defaults to undefined|
| **includeStop** | [**boolean**] | Enrich stop times response object with stop. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**Array<GTFSStopTime>**

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

# **v2GtfsTripsGet**
> Array<GTFSTrip> v2GtfsTripsGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let stopId: string; //Filter trips that include specific stop. (optional) (default to undefined)
let date: string; //Filter trips by specific date. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsTripsGet(
    stopId,
    date,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopId** | [**string**] | Filter trips that include specific stop. | (optional) defaults to undefined|
| **date** | [**string**] | Filter trips by specific date. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**Array<GTFSTrip>**

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

# **v2GtfsTripsIdGet**
> V2GtfsTripsIdGet200Response v2GtfsTripsIdGet()



### Example

```typescript
import {
    GTFSStaticV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSStaticV2Api(configuration);

let id: string; // (default to undefined)
let includeShapes: boolean; //Enrich trip response object with shapes. (optional) (default to undefined)
let includeStops: boolean; //Enrich trip response object with stops. (optional) (default to undefined)
let includeStopTimes: boolean; //Enrich trip response object with stops times. (optional) (default to undefined)
let includeService: boolean; //Enrich trip response object with service. (optional) (default to undefined)
let includeRoute: boolean; //Enrich trip response object with routes. (optional) (default to undefined)
let date: string; //Filter trips by specific date in format (YYYY-MM-DD). (optional) (default to undefined)

const { status, data } = await apiInstance.v2GtfsTripsIdGet(
    id,
    includeShapes,
    includeStops,
    includeStopTimes,
    includeService,
    includeRoute,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **includeShapes** | [**boolean**] | Enrich trip response object with shapes. | (optional) defaults to undefined|
| **includeStops** | [**boolean**] | Enrich trip response object with stops. | (optional) defaults to undefined|
| **includeStopTimes** | [**boolean**] | Enrich trip response object with stops times. | (optional) defaults to undefined|
| **includeService** | [**boolean**] | Enrich trip response object with service. | (optional) defaults to undefined|
| **includeRoute** | [**boolean**] | Enrich trip response object with routes. | (optional) defaults to undefined|
| **date** | [**string**] | Filter trips by specific date in format (YYYY-MM-DD). | (optional) defaults to undefined|


### Return type

**V2GtfsTripsIdGet200Response**

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

