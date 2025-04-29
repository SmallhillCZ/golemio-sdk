# GTFSRealtimeV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2VehiclepositionsGtfsrtAlertsPbGet**](#v2vehiclepositionsgtfsrtalertspbget) | **GET** /v2/vehiclepositions/gtfsrt/alerts.pb | GET GTFS-RT Service Alerts Feed|
|[**v2VehiclepositionsGtfsrtPidFeedPbGet**](#v2vehiclepositionsgtfsrtpidfeedpbget) | **GET** /v2/vehiclepositions/gtfsrt/pid_feed.pb | GET GTFS-RT PID Feed (trip updates and vehicle positions, combined)|
|[**v2VehiclepositionsGtfsrtTripUpdatesPbGet**](#v2vehiclepositionsgtfsrttripupdatespbget) | **GET** /v2/vehiclepositions/gtfsrt/trip_updates.pb | GET GTFS-RT Trip Updates Feed|
|[**v2VehiclepositionsGtfsrtVehiclePositionsPbGet**](#v2vehiclepositionsgtfsrtvehiclepositionspbget) | **GET** /v2/vehiclepositions/gtfsrt/vehicle_positions.pb | GET GTFS-RT Vehicle Positions Feed|

# **v2VehiclepositionsGtfsrtAlertsPbGet**
> File v2VehiclepositionsGtfsrtAlertsPbGet()



### Example

```typescript
import {
    GTFSRealtimeV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSRealtimeV2Api(configuration);

const { status, data } = await apiInstance.v2VehiclepositionsGtfsrtAlertsPbGet();
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

# **v2VehiclepositionsGtfsrtPidFeedPbGet**
> File v2VehiclepositionsGtfsrtPidFeedPbGet()



### Example

```typescript
import {
    GTFSRealtimeV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSRealtimeV2Api(configuration);

const { status, data } = await apiInstance.v2VehiclepositionsGtfsrtPidFeedPbGet();
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

# **v2VehiclepositionsGtfsrtTripUpdatesPbGet**
> File v2VehiclepositionsGtfsrtTripUpdatesPbGet()



### Example

```typescript
import {
    GTFSRealtimeV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSRealtimeV2Api(configuration);

const { status, data } = await apiInstance.v2VehiclepositionsGtfsrtTripUpdatesPbGet();
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

# **v2VehiclepositionsGtfsrtVehiclePositionsPbGet**
> File v2VehiclepositionsGtfsrtVehiclePositionsPbGet()



### Example

```typescript
import {
    GTFSRealtimeV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new GTFSRealtimeV2Api(configuration);

const { status, data } = await apiInstance.v2VehiclepositionsGtfsrtVehiclePositionsPbGet();
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

