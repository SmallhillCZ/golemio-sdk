# GTFSRealtimeV2InternalApi

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2VehiclepositionsGtfsrtPidDisplayAlertsPbGet**](#v2vehiclepositionsgtfsrtpiddisplayalertspbget) | **GET** /v2/vehiclepositions/gtfsrt/pid_display_alerts.pb | GET GTFS-RT Display Alerts Feed|

# **v2VehiclepositionsGtfsrtPidDisplayAlertsPbGet**
> File v2VehiclepositionsGtfsrtPidDisplayAlertsPbGet()

Experimental feed with infotext alerts targeted at specific stops for e-paper displays. Uses stopId in informedEntity instead of routeId.

### Example

```typescript
import {
    GTFSRealtimeV2InternalApi,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSRealtimeV2InternalApi(configuration);

const { status, data } = await apiInstance.v2VehiclepositionsGtfsrtPidDisplayAlertsPbGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control -  <br>  * Last-Modified -  <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

