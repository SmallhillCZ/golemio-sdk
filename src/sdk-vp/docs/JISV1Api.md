# JISV1Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1JisEventsCustomFormatGet**](#v1jiseventscustomformatget) | **GET** /v1/jis/events/custom-format | Get all published events in custom format for external use|

# **v1JisEventsCustomFormatGet**
> Array<EventCustomFormat> v1JisEventsCustomFormatGet()


### Example

```typescript
import {
    JISV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new JISV1Api(configuration);

let displayPeriodStart: string; //Start of the display period (optional) (default to undefined)
let displayPeriodEnd: string; //End of the display period (optional) (default to undefined)
let organizationNames: Array<string>; //List of organization names to filter events by. (optional) (default to undefined)

const { status, data } = await apiInstance.v1JisEventsCustomFormatGet(
    displayPeriodStart,
    displayPeriodEnd,
    organizationNames
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayPeriodStart** | [**string**] | Start of the display period | (optional) defaults to undefined|
| **displayPeriodEnd** | [**string**] | End of the display period | (optional) defaults to undefined|
| **organizationNames** | **Array&lt;string&gt;** | List of organization names to filter events by. | (optional) defaults to undefined|


### Return type

**Array<EventCustomFormat>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad request - invalid query parameters |  -  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

