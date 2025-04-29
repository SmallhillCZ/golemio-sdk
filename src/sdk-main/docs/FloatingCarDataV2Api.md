# FloatingCarDataV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFCD**](#getfcd) | **GET** /v2/fcd/info | GET Latest floating Car Data|

# **getFCD**
> FloatingCarDataPublication getFCD()



### Example

```typescript
import {
    FloatingCarDataV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new FloatingCarDataV2Api(configuration);

let locationId: string; //Filters data with Predefined Location Id. (optional) (default to undefined)
let osmPath: boolean; //Includes in the output pathOsm (optional) (default to undefined)
let minutesBefore: number; //Lists items updated since given number of minutes, returns unique locations only (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)

const { status, data } = await apiInstance.getFCD(
    locationId,
    osmPath,
    minutesBefore,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**string**] | Filters data with Predefined Location Id. | (optional) defaults to undefined|
| **osmPath** | [**boolean**] | Includes in the output pathOsm | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Lists items updated since given number of minutes, returns unique locations only | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|


### Return type

**FloatingCarDataPublication**

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

