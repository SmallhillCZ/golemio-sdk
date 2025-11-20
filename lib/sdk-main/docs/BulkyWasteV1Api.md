# BulkyWasteV1Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBWStations**](#getbwstations) | **GET** /v1/bulky-waste/stations | GET All Bulky Waste Containers|
|[**v1BulkyWasteStationsCustomIdGet**](#v1bulkywastestationscustomidget) | **GET** /v1/bulky-waste/stations/:customId | GET Bulky Waste Station by customId|

# **getBWStations**
> BulkyStationsCollection getBWStations()

Provides position of the bulky containers

### Example

```typescript
import {
    BulkyWasteV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new BulkyWasteV1Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first) (optional) (default to undefined)
let range: number; //Filter by distance from latlng in kilometres (default 1 km). Depends on the latlng parameter (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime ( default before pick time to) (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (default 60 days into the future) (optional) (default to undefined)
let districts: string; //Filter by Prague city districts (slug) separated by comma (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)

const { status, data } = await apiInstance.getBWStations(
    latlng,
    range,
    from,
    to,
    districts,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first) | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in kilometres (default 1 km). Depends on the latlng parameter | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime ( default before pick time to) | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime (default 60 days into the future) | (optional) defaults to undefined|
| **districts** | [**string**] | Filter by Prague city districts (slug) separated by comma | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|


### Return type

**BulkyStationsCollection**

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

# **v1BulkyWasteStationsCustomIdGet**
> BulkyContainer v1BulkyWasteStationsCustomIdGet()


### Example

```typescript
import {
    BulkyWasteV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new BulkyWasteV1Api(configuration);

let customId: string; //Custom id (in form of pick_date pick_time_from ID:id) (default to undefined)

const { status, data } = await apiInstance.v1BulkyWasteStationsCustomIdGet(
    customId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customId** | [**string**] | Custom id (in form of pick_date pick_time_from ID:id) | defaults to undefined|


### Return type

**BulkyContainer**

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

