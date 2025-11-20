# ParkingV3Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v3ParkingGet**](#v3parkingget) | **GET** /v3/parking | Get a list of parking locations within the region of interest with filtering options|
|[**v3ParkingIdAverageOccupancyGet**](#v3parkingidaverageoccupancyget) | **GET** /v3/parking/{id}/average-occupancy | Get detailed information about the average occupancy by ID|
|[**v3ParkingIdGet**](#v3parkingidget) | **GET** /v3/parking/{id} | Get detailed information about a parking location by ID|
|[**v3ParkingMachinesGet**](#v3parkingmachinesget) | **GET** /v3/parking-machines | Get a list of parking machines within the region of interest with filtering options. Results are sorted by id.|
|[**v3ParkingMachinesIdGet**](#v3parkingmachinesidget) | **GET** /v3/parking-machines/{id} | Get a parking machine by ID|
|[**v3ParkingMeasurementsGet**](#v3parkingmeasurementsget) | **GET** /v3/parking-measurements | Get a list of the latest (max 1h old) parking measurements with filtering options|
|[**v3ParkingSourcesGet**](#v3parkingsourcesget) | **GET** /v3/parking-sources | Available parking sources|
|[**v3ParkingTariffsGet**](#v3parkingtariffsget) | **GET** /v3/parking-tariffs | Get a list of tariffs with filtering options|
|[**v3ParkingTariffsIdGet**](#v3parkingtariffsidget) | **GET** /v3/parking-tariffs/{id} | Get a tariff by ID|

# **v3ParkingGet**
> V3ParkingGet200Response v3ParkingGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let primarySource: Array<string>; //Filter by data source (note that `osm` is a secondary source, not a primary source). Use with square brackets `primarySource[]`. When no filter is used, all parking locations from all primary sources are included along with non-overlapping parking locations from all secondary sources (`osm`). Similarly, when a filter with both primary and secondary sources is used, all parking locations from the specified primary sources are included along with non-overlapping parking locations from the specified secondary sources. When a filter with only a single source is used, all parking locations from the specified source are included regardless of whether the source is primary or secondary. (optional) (default to undefined)
let boundingBox: string; //Filter by bounding box in format \"topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\", polygons that fit only partially to selected bounding box are included (optional) (default to undefined)
let validFrom: string; //Filter by valid from date (optional) (default to undefined)
let openingHoursValidFrom: string; //Filter opening hours by valid from date (optional) (default to undefined)
let openingHoursValidTo: string; //Filter opening hours by valid to date (optional) (default to undefined)
let accessDedicatedTo: Array<'disabled' | 'charging' | 'parent' | 'delivery' | 'customer' | 'resident' | 'bus' | 'designated' | 'truck' | 'motorcycle' | 'RV'>; //Experimental: Filter by access combinations to specific spaces in parking. Return only strictly matched parking by access to parking spaces (optional) (default to undefined)
let parkingPolicy: Array<'commercial' | 'customer_only' | 'kiss_and_ride' | 'park_and_ride' | 'park_sharing' | 'zone'>; //Filter by parking policy. For multiple values use with square brackets `parkingPolicy[]` (optional) (default to undefined)
let minutesBefore: number; //Filter by time conditions based on last data update. By maximal minutes before last update. (optional) (default to undefined)
let updatedSince: string; //Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. (optional) (default to undefined)
let activeOnly: boolean; //If true, filter out locations that did not appear in latest source data. (optional) (default to true)
let limit: number; //Number of results to return (optional) (default to 1000)
let offset: number; //Number of results to skip for pagination (optional) (default to 0)

const { status, data } = await apiInstance.v3ParkingGet(
    primarySource,
    boundingBox,
    validFrom,
    openingHoursValidFrom,
    openingHoursValidTo,
    accessDedicatedTo,
    parkingPolicy,
    minutesBefore,
    updatedSince,
    activeOnly,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **primarySource** | **Array&lt;string&gt;** | Filter by data source (note that &#x60;osm&#x60; is a secondary source, not a primary source). Use with square brackets &#x60;primarySource[]&#x60;. When no filter is used, all parking locations from all primary sources are included along with non-overlapping parking locations from all secondary sources (&#x60;osm&#x60;). Similarly, when a filter with both primary and secondary sources is used, all parking locations from the specified primary sources are included along with non-overlapping parking locations from the specified secondary sources. When a filter with only a single source is used, all parking locations from the specified source are included regardless of whether the source is primary or secondary. | (optional) defaults to undefined|
| **boundingBox** | [**string**] | Filter by bounding box in format \&quot;topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\&quot;, polygons that fit only partially to selected bounding box are included | (optional) defaults to undefined|
| **validFrom** | [**string**] | Filter by valid from date | (optional) defaults to undefined|
| **openingHoursValidFrom** | [**string**] | Filter opening hours by valid from date | (optional) defaults to undefined|
| **openingHoursValidTo** | [**string**] | Filter opening hours by valid to date | (optional) defaults to undefined|
| **accessDedicatedTo** | **Array<&#39;disabled&#39; &#124; &#39;charging&#39; &#124; &#39;parent&#39; &#124; &#39;delivery&#39; &#124; &#39;customer&#39; &#124; &#39;resident&#39; &#124; &#39;bus&#39; &#124; &#39;designated&#39; &#124; &#39;truck&#39; &#124; &#39;motorcycle&#39; &#124; &#39;RV&#39;>** | Experimental: Filter by access combinations to specific spaces in parking. Return only strictly matched parking by access to parking spaces | (optional) defaults to undefined|
| **parkingPolicy** | **Array<&#39;commercial&#39; &#124; &#39;customer_only&#39; &#124; &#39;kiss_and_ride&#39; &#124; &#39;park_and_ride&#39; &#124; &#39;park_sharing&#39; &#124; &#39;zone&#39;>** | Filter by parking policy. For multiple values use with square brackets &#x60;parkingPolicy[]&#x60; | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Filter by time conditions based on last data update. By maximal minutes before last update. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. | (optional) defaults to undefined|
| **activeOnly** | [**boolean**] | If true, filter out locations that did not appear in latest source data. | (optional) defaults to true|
| **limit** | [**number**] | Number of results to return | (optional) defaults to 1000|
| **offset** | [**number**] | Number of results to skip for pagination | (optional) defaults to 0|


### Return type

**V3ParkingGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingIdAverageOccupancyGet**
> AverageOccupancyWeek v3ParkingIdAverageOccupancyGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let id: string; //The identifier of the parking space to retrieve (default to undefined)

const { status, data } = await apiInstance.v3ParkingIdAverageOccupancyGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The identifier of the parking space to retrieve | defaults to undefined|


### Return type

**AverageOccupancyWeek**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingIdGet**
> Parking v3ParkingIdGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let id: string; //The identifier of the parking location to retrieve (default to undefined)

const { status, data } = await apiInstance.v3ParkingIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The identifier of the parking location to retrieve | defaults to undefined|


### Return type

**Parking**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingMachinesGet**
> V3ParkingMachinesGet200Response v3ParkingMachinesGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let primarySource: Array<string>; //Filter by primary source. Use with square brackets `primarySource[]` (optional) (default to undefined)
let type: Array<'payment_machine' | 'info_box'>; //Filter by type. Use with square brackets `type[]` (optional) (default to undefined)
let boundingBox: string; //Filter by bounding box in format \"topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\", polygons that fit only partially to selected bounding box are included (optional) (default to undefined)
let codeMask: string; //Filter by code mask using substring match and \"%\" wildcard (partial match). (If used directly in postman or browser, \"%\" needs to be encoded as \"%25\". Examples: - `query` matches substring in codes - `start%` matches codes starting with \"start\" - `%end` matches codes ending with \"end\" - `%middle%` matches codes containing \"middle\" anywhere  (optional) (default to undefined)
let validFrom: string; //Filter by valid from date (optional) (default to undefined)
let activeOnly: boolean; //If true, filter out parking machines that did not appear in latest source data. (optional) (default to true)
let limit: number; //Number of results to return (optional) (default to 1000)
let offset: number; //Number of results to skip for pagination (optional) (default to 0)

const { status, data } = await apiInstance.v3ParkingMachinesGet(
    primarySource,
    type,
    boundingBox,
    codeMask,
    validFrom,
    activeOnly,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **primarySource** | **Array&lt;string&gt;** | Filter by primary source. Use with square brackets &#x60;primarySource[]&#x60; | (optional) defaults to undefined|
| **type** | **Array<&#39;payment_machine&#39; &#124; &#39;info_box&#39;>** | Filter by type. Use with square brackets &#x60;type[]&#x60; | (optional) defaults to undefined|
| **boundingBox** | [**string**] | Filter by bounding box in format \&quot;topLeft.lat,topLeft.lon,bottomRight.lat,bottomRight.lon\&quot;, polygons that fit only partially to selected bounding box are included | (optional) defaults to undefined|
| **codeMask** | [**string**] | Filter by code mask using substring match and \&quot;%\&quot; wildcard (partial match). (If used directly in postman or browser, \&quot;%\&quot; needs to be encoded as \&quot;%25\&quot;. Examples: - &#x60;query&#x60; matches substring in codes - &#x60;start%&#x60; matches codes starting with \&quot;start\&quot; - &#x60;%end&#x60; matches codes ending with \&quot;end\&quot; - &#x60;%middle%&#x60; matches codes containing \&quot;middle\&quot; anywhere  | (optional) defaults to undefined|
| **validFrom** | [**string**] | Filter by valid from date | (optional) defaults to undefined|
| **activeOnly** | [**boolean**] | If true, filter out parking machines that did not appear in latest source data. | (optional) defaults to true|
| **limit** | [**number**] | Number of results to return | (optional) defaults to 1000|
| **offset** | [**number**] | Number of results to skip for pagination | (optional) defaults to 0|


### Return type

**V3ParkingMachinesGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingMachinesIdGet**
> ParkingMachine v3ParkingMachinesIdGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let id: string; //ID of the parking machine to retrieve (default to undefined)

const { status, data } = await apiInstance.v3ParkingMachinesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the parking machine to retrieve | defaults to undefined|


### Return type

**ParkingMachine**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingMeasurementsGet**
> Array<ParkingOccupancyMeasurement> v3ParkingMeasurementsGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let primarySource: Array<string>; //Filter by primary source. Use with square brackets `primarySource[]` (optional) (default to undefined)
let parkingId: Array<string>; //Filter by primary parking ID. Use with square brackets `parkingId[]` (optional) (default to undefined)
let limit: number; //Number of results to return (optional) (default to 10000)
let offset: number; //Number of results to skip for pagination (optional) (default to 0)

const { status, data } = await apiInstance.v3ParkingMeasurementsGet(
    primarySource,
    parkingId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **primarySource** | **Array&lt;string&gt;** | Filter by primary source. Use with square brackets &#x60;primarySource[]&#x60; | (optional) defaults to undefined|
| **parkingId** | **Array&lt;string&gt;** | Filter by primary parking ID. Use with square brackets &#x60;parkingId[]&#x60; | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to return | (optional) defaults to 10000|
| **offset** | [**number**] | Number of results to skip for pagination | (optional) defaults to 0|


### Return type

**Array<ParkingOccupancyMeasurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingSourcesGet**
> Array<ParkingSource> v3ParkingSourcesGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

const { status, data } = await apiInstance.v3ParkingSourcesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ParkingSource>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingTariffsGet**
> Array<ParkingTariff> v3ParkingTariffsGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let primarySource: Array<string>; //Filter by primary source. Use with square brackets `primarySource[]` (optional) (default to undefined)
let validFrom: string; //Filter by valid from date of ChargeBand in Tariff (result show all tariffs that contains at least one valid ChargeBand and inside only ChargeBand objects that fit into that filter) (optional) (default to undefined)
let validTo: string; //Filter by valid to date of ChargeBand in Tariff (result show all tariffs that contains at least one valid ChargeBand and inside only ChargeBand objects that fit into that filter) (optional) (default to undefined)
let limit: number; //Number of results to return (optional) (default to 1000)
let offset: number; //Number of results to skip for pagination (optional) (default to 0)

const { status, data } = await apiInstance.v3ParkingTariffsGet(
    primarySource,
    validFrom,
    validTo,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **primarySource** | **Array&lt;string&gt;** | Filter by primary source. Use with square brackets &#x60;primarySource[]&#x60; | (optional) defaults to undefined|
| **validFrom** | [**string**] | Filter by valid from date of ChargeBand in Tariff (result show all tariffs that contains at least one valid ChargeBand and inside only ChargeBand objects that fit into that filter) | (optional) defaults to undefined|
| **validTo** | [**string**] | Filter by valid to date of ChargeBand in Tariff (result show all tariffs that contains at least one valid ChargeBand and inside only ChargeBand objects that fit into that filter) | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to return | (optional) defaults to 1000|
| **offset** | [**number**] | Number of results to skip for pagination | (optional) defaults to 0|


### Return type

**Array<ParkingTariff>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3ParkingTariffsIdGet**
> ParkingTariff v3ParkingTariffsIdGet()


### Example

```typescript
import {
    ParkingV3Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV3Api(configuration);

let id: string; //UUID of the tariff to retrieve (default to undefined)

const { status, data } = await apiInstance.v3ParkingTariffsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of the tariff to retrieve | defaults to undefined|


### Return type

**ParkingTariff**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

