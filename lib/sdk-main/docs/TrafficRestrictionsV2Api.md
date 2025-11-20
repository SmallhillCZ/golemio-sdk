# TrafficRestrictionsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTrafficRestrictions**](#gettrafficrestrictions) | **GET** /v2/traffic/restrictions | GET All Traffic Restrictions for a specific moment|

# **getTrafficRestrictions**
> TrafficRestrictionsPublication getTrafficRestrictions()



### Example

```typescript
import {
    TrafficRestrictionsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new TrafficRestrictionsV2Api(configuration);

let moment: string; //Get restrictions valid on given moment. ISO8601 format. (optional) (default to undefined)
let situationRecordType: string; //Situation Record Type (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Sets offset for pagination. Combine with limit accordingly. (optional) (default to undefined)

const { status, data } = await apiInstance.getTrafficRestrictions(
    moment,
    situationRecordType,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moment** | [**string**] | Get restrictions valid on given moment. ISO8601 format. | (optional) defaults to undefined|
| **situationRecordType** | [**string**] | Situation Record Type | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Sets offset for pagination. Combine with limit accordingly. | (optional) defaults to undefined|


### Return type

**TrafficRestrictionsPublication**

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

