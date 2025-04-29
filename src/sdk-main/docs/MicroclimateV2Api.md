# MicroclimateV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETAllMicroclimateSensorLocations**](#getallmicroclimatesensorlocations) | **GET** /v2/microclimate/locations | GET All Microclimate Sensor Locations|
|[**gETAllMicroclimateSensorMeasurements**](#getallmicroclimatesensormeasurements) | **GET** /v2/microclimate/measurements | GET All Microclimate Sensor Measurements|
|[**gETMicroclimateSensorPoints**](#getmicroclimatesensorpoints) | **GET** /v2/microclimate/points | GET Microclimate Sensor Points|

# **gETAllMicroclimateSensorLocations**
> Array<Location> gETAllMicroclimateSensorLocations()



### Example

```typescript
import {
    MicroclimateV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MicroclimateV2Api(configuration);

let locationId: number; //Filter by location (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllMicroclimateSensorLocations(
    locationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**number**] | Filter by location | (optional) defaults to undefined|


### Return type

**Array<Location>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**403** | Forbidden |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gETAllMicroclimateSensorMeasurements**
> Array<Measurement> gETAllMicroclimateSensorMeasurements()



### Example

```typescript
import {
    MicroclimateV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MicroclimateV2Api(configuration);

let locationId: number; //Filter by location (optional) (default to undefined)
let pointId: number; //Filter by location (optional) (default to undefined)
let measure: string; //Filter by measure type (optional) (default to undefined)
let from: string; //Filter by measured_at (optional) (default to undefined)
let to: string; //Filter by measured_at (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllMicroclimateSensorMeasurements(
    locationId,
    pointId,
    measure,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**number**] | Filter by location | (optional) defaults to undefined|
| **pointId** | [**number**] | Filter by location | (optional) defaults to undefined|
| **measure** | [**string**] | Filter by measure type | (optional) defaults to undefined|
| **from** | [**string**] | Filter by measured_at | (optional) defaults to undefined|
| **to** | [**string**] | Filter by measured_at | (optional) defaults to undefined|


### Return type

**Array<Measurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**403** | Forbidden |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gETMicroclimateSensorPoints**
> Point3 gETMicroclimateSensorPoints()



### Example

```typescript
import {
    MicroclimateV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MicroclimateV2Api(configuration);

let locationId: number; //Filter by location (optional) (default to undefined)
let pointId: number; //Filter by location (optional) (default to undefined)

const { status, data } = await apiInstance.gETMicroclimateSensorPoints(
    locationId,
    pointId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**number**] | Filter by location | (optional) defaults to undefined|
| **pointId** | [**number**] | Filter by location | (optional) defaults to undefined|


### Return type

**Point3**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**403** | Forbidden |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

