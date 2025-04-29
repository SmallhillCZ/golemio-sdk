# PIDDepartureBoardsV3InternalApi

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v3PidDeparturepresetsGet**](#v3piddeparturepresetsget) | **GET** /v3/pid/departurepresets | Get ROPID departures presets linked with gtfs stops|

# **v3PidDeparturepresetsGet**
> Array<V3PidDeparturepresetsGet200ResponseInner> v3PidDeparturepresetsGet()


### Example

```typescript
import {
    PIDDepartureBoardsV3InternalApi,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV3InternalApi(configuration);

const { status, data } = await apiInstance.v3PidDeparturepresetsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<V3PidDeparturepresetsGet200ResponseInner>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of ROPID departures presets linked with gtfs stops |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

