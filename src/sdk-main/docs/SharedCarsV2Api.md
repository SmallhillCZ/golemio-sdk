# SharedCarsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETAllSharedCars**](#getallsharedcars) | **GET** /v2/sharedcars | GET All Shared Cars|
|[**gETSharedCar**](#getsharedcar) | **GET** /v2/sharedcars/{id} | GET Shared Car|

# **gETAllSharedCars**
> GETAllSharedCars200Response gETAllSharedCars()



### Example

```typescript
import {
    SharedCarsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new SharedCarsV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<any>; //Filter by Prague city districts (in array format - eg. districts[]=praha7&districts[]=praha6) (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)
let companyNames: Array<string>; //Filters all results with company.name property by this parameter. Use with square brackets `companyNames[]`, multiple values can be passed forming an array. (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllSharedCars(
    latlng,
    range,
    districts,
    limit,
    offset,
    updatedSince,
    companyNames
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first). | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in meters (range query). Depends on the latlng parameter. | (optional) defaults to undefined|
| **districts** | **Array&lt;any&gt;** | Filter by Prague city districts (in array format - eg. districts[]&#x3D;praha7&amp;districts[]&#x3D;praha6) | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|
| **companyNames** | **Array&lt;string&gt;** | Filters all results with company.name property by this parameter. Use with square brackets &#x60;companyNames[]&#x60;, multiple values can be passed forming an array. | (optional) defaults to undefined|


### Return type

**GETAllSharedCars200Response**

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
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gETSharedCar**
> SharedCar gETSharedCar()



### Example

```typescript
import {
    SharedCarsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new SharedCarsV2Api(configuration);

let id: string; //Identifier of the shared car. (default to undefined)

const { status, data } = await apiInstance.gETSharedCar(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the shared car. | defaults to undefined|


### Return type

**SharedCar**

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
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

