# WazeV1Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPotHoles**](#getpotholes) | **GET** /v1/potholes/data | GET All Pot holes|

# **getPotHoles**
> PotHolesCollection getPotHoles()

Provides information about pot holes

### Example

```typescript
import {
    WazeV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new WazeV1Api(configuration);

let from: string; //Date in ISO8601, limit to pothole alerts published by Waze from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limit to pothole alerts published by Waze until this datetime (default 7 days into past) (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)

const { status, data } = await apiInstance.getPotHoles(
    from,
    to,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | Date in ISO8601, limit to pothole alerts published by Waze from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limit to pothole alerts published by Waze until this datetime (default 7 days into past) | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|


### Return type

**PotHolesCollection**

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

