# PedestriansV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2PedestriansLocationsGet**](#v2pedestrianslocationsget) | **GET** /v2/pedestrians/locations | Get locations and directions|
|[**v2PedestriansMeasurementsGet**](#v2pedestriansmeasurementsget) | **GET** /v2/pedestrians/measurements | GET measurements of pedestrian traffic|

# **v2PedestriansLocationsGet**
> Array<PedestriansLocation> v2PedestriansLocationsGet()



### Example

```typescript
import {
    PedestriansV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new PedestriansV2Api(configuration);

let locationId: number; //Lists only locations with this ID (optional) (default to undefined)
let locationName: string; //Lists only locations with this NAME (optional) (default to undefined)
let limit: number; //Limits number of retrieved items (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)

const { status, data } = await apiInstance.v2PedestriansLocationsGet(
    locationId,
    locationName,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**number**] | Lists only locations with this ID | (optional) defaults to undefined|
| **locationName** | [**string**] | Lists only locations with this NAME | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|


### Return type

**Array<PedestriansLocation>**

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
|**404** | Location not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2PedestriansMeasurementsGet**
> Array<PedestriansMeasurement> v2PedestriansMeasurementsGet()



### Example

```typescript
import {
    PedestriansV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new PedestriansV2Api(configuration);

let locationId: string; //Lists only measurements for this location (optional) (default to undefined)
let directionId: string; //Lists only measurements for this direction (optional) (default to undefined)
let limit: number; //Limits number of retrieved items (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (optional) (default to undefined)

const { status, data } = await apiInstance.v2PedestriansMeasurementsGet(
    locationId,
    directionId,
    limit,
    offset,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**string**] | Lists only measurements for this location | (optional) defaults to undefined|
| **directionId** | [**string**] | Lists only measurements for this direction | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime | (optional) defaults to undefined|


### Return type

**Array<PedestriansMeasurement>**

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
|**404** | Location not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

