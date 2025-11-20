# EnergeticsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2EnergeticsBuildingsGet**](#v2energeticsbuildingsget) | **GET** /v2/energetics/buildings | Get all buildings|
|[**v2EnergeticsBuildingsIdGet**](#v2energeticsbuildingsidget) | **GET** /v2/energetics/buildings/{id} | Get a building by ID|
|[**v2EnergeticsDevicesDeviceIdGet**](#v2energeticsdevicesdeviceidget) | **GET** /v2/energetics/devices/{deviceId} | Measurement device info|
|[**v2EnergeticsDevicesGet**](#v2energeticsdevicesget) | **GET** /v2/energetics/devices | List of measurement devices|
|[**v2EnergeticsMeasurementsGet**](#v2energeticsmeasurementsget) | **GET** /v2/energetics/measurements | Measurements|
|[**v2EnergeticsMeasurementsMonthlyReadingGet**](#v2energeticsmeasurementsmonthlyreadingget) | **GET** /v2/energetics/measurements/monthly-reading | Monthly sums of measurements from devices|
|[**v2EnergeticsOrganizationsGet**](#v2energeticsorganizationsget) | **GET** /v2/energetics/organizations | List of organizations in brief or full format|
|[**v2EnergeticsOrganizationsOrganizationIdGet**](#v2energeticsorganizationsorganizationidget) | **GET** /v2/energetics/organizations/{organizationId} | Organization detail|

# **v2EnergeticsBuildingsGet**
> Array<EnergeticsBuildingShort> v2EnergeticsBuildingsGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let full: boolean; //Display full buildings data. (optional) (default to false)

const { status, data } = await apiInstance.v2EnergeticsBuildingsGet(
    full
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **full** | [**boolean**] | Display full buildings data. | (optional) defaults to false|


### Return type

**Array<EnergeticsBuildingShort>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsBuildingsIdGet**
> EnergeticsBuildingFull v2EnergeticsBuildingsIdGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsBuildingsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**EnergeticsBuildingFull**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsDevicesDeviceIdGet**
> EnergeticsDevice v2EnergeticsDevicesDeviceIdGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let deviceId: number; //Id of device (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsDevicesDeviceIdGet(
    deviceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deviceId** | [**number**] | Id of device | defaults to undefined|


### Return type

**EnergeticsDevice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  -  |
|**404** | Record not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsDevicesGet**
> Array<EnergeticsDevice> v2EnergeticsDevicesGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

const { status, data } = await apiInstance.v2EnergeticsDevicesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<EnergeticsDevice>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsMeasurementsGet**
> Array<EnergeticsMeasurement> v2EnergeticsMeasurementsGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let variable: EnergeticsVariables; //core - Kumulovaný objem [m3]<br /> core2 - Kumulovaný přepočítaný objem [Nm3]<br /> EFwActi - Odběr činné energie [kWh]<br /> EFwActiVT - Odběr činné energie, vysoký tarif [kVArh]<br /> ERvReact - Dodávka jalové energie [kVArh]<br /> EFwReact - Odběr jalové energie [kVArh]<br /> raw - Číselník impulzů [imp]<br /> RSSI - Síla signálu [dBm]<br /> T - Teplota [°C]<br /> CO2 - Koncentrace CO2 [ppm]<br /> RH - Relativní vlhkost [%]<br /> EFwActiNT - Odběr činné energie, nízký tarif [kVArh]<br /> VOC - Míra koncentrace těkavých látek [%]<br /> VT - Vysoký tarif [kWh]<br /> NT - Nízký tarif [kWh]<br /> (optional) (default to undefined)
let type: EnergeticsTypes; //monthly_reading - hodnoty sčítané po měsících z 15 minutových spotřeb poskytovaných firmou PRE<br /> provider_value - data získaná od poskytovatelů energií<br /> dotcontrols_value - data získaná ze systémů VisApp firmy DotControls<br /> (optional) (default to undefined)
let addr1: string; // (optional) (default to undefined)
let addr2: string; // (optional) (default to undefined)
let dateFrom: string; // (optional) (default to undefined)
let dateTo: string; // (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsMeasurementsGet(
    variable,
    type,
    addr1,
    addr2,
    dateFrom,
    dateTo,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variable** | **EnergeticsVariables** | core - Kumulovaný objem [m3]&lt;br /&gt; core2 - Kumulovaný přepočítaný objem [Nm3]&lt;br /&gt; EFwActi - Odběr činné energie [kWh]&lt;br /&gt; EFwActiVT - Odběr činné energie, vysoký tarif [kVArh]&lt;br /&gt; ERvReact - Dodávka jalové energie [kVArh]&lt;br /&gt; EFwReact - Odběr jalové energie [kVArh]&lt;br /&gt; raw - Číselník impulzů [imp]&lt;br /&gt; RSSI - Síla signálu [dBm]&lt;br /&gt; T - Teplota [°C]&lt;br /&gt; CO2 - Koncentrace CO2 [ppm]&lt;br /&gt; RH - Relativní vlhkost [%]&lt;br /&gt; EFwActiNT - Odběr činné energie, nízký tarif [kVArh]&lt;br /&gt; VOC - Míra koncentrace těkavých látek [%]&lt;br /&gt; VT - Vysoký tarif [kWh]&lt;br /&gt; NT - Nízký tarif [kWh]&lt;br /&gt; | (optional) defaults to undefined|
| **type** | **EnergeticsTypes** | monthly_reading - hodnoty sčítané po měsících z 15 minutových spotřeb poskytovaných firmou PRE&lt;br /&gt; provider_value - data získaná od poskytovatelů energií&lt;br /&gt; dotcontrols_value - data získaná ze systémů VisApp firmy DotControls&lt;br /&gt; | (optional) defaults to undefined|
| **addr1** | [**string**] |  | (optional) defaults to undefined|
| **addr2** | [**string**] |  | (optional) defaults to undefined|
| **dateFrom** | [**string**] |  | (optional) defaults to undefined|
| **dateTo** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|


### Return type

**Array<EnergeticsMeasurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsMeasurementsMonthlyReadingGet**
> Array<EnergeticsMeasurement> v2EnergeticsMeasurementsMonthlyReadingGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let addr1: string; //First part of device address (default to undefined)
let addr2: string; //Second part of device address (default to undefined)
let variable: EnergeticsVariables; //core - Kumulovaný objem [m3]<br /> core2 - Kumulovaný přepočítaný objem [Nm3]<br /> EFwActi - Odběr činné energie [kWh]<br /> EFwActiVT - Odběr činné energie, vysoký tarif [kVArh]<br /> ERvReact - Dodávka jalové energie [kVArh]<br /> EFwReact - Odběr jalové energie [kVArh]<br /> raw - Číselník impulzů [imp]<br /> RSSI - Síla signálu [dBm]<br /> T - Teplota [°C]<br /> CO2 - Koncentrace CO2 [ppm]<br /> RH - Relativní vlhkost [%]<br /> EFwActiNT - Odběr činné energie, nízký tarif [kVArh]<br /> VOC - Míra koncentrace těkavých látek [%]<br /> VT - Vysoký tarif [kWh]<br /> NT - Nízký tarif [kWh]<br /> (default to undefined)
let year: number; //Year of measurement (default to undefined)
let month: number; //Month of measurement (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsMeasurementsMonthlyReadingGet(
    addr1,
    addr2,
    variable,
    year,
    month
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addr1** | [**string**] | First part of device address | defaults to undefined|
| **addr2** | [**string**] | Second part of device address | defaults to undefined|
| **variable** | **EnergeticsVariables** | core - Kumulovaný objem [m3]&lt;br /&gt; core2 - Kumulovaný přepočítaný objem [Nm3]&lt;br /&gt; EFwActi - Odběr činné energie [kWh]&lt;br /&gt; EFwActiVT - Odběr činné energie, vysoký tarif [kVArh]&lt;br /&gt; ERvReact - Dodávka jalové energie [kVArh]&lt;br /&gt; EFwReact - Odběr jalové energie [kVArh]&lt;br /&gt; raw - Číselník impulzů [imp]&lt;br /&gt; RSSI - Síla signálu [dBm]&lt;br /&gt; T - Teplota [°C]&lt;br /&gt; CO2 - Koncentrace CO2 [ppm]&lt;br /&gt; RH - Relativní vlhkost [%]&lt;br /&gt; EFwActiNT - Odběr činné energie, nízký tarif [kVArh]&lt;br /&gt; VOC - Míra koncentrace těkavých látek [%]&lt;br /&gt; VT - Vysoký tarif [kWh]&lt;br /&gt; NT - Nízký tarif [kWh]&lt;br /&gt; | defaults to undefined|
| **year** | [**number**] | Year of measurement | defaults to undefined|
| **month** | [**number**] | Month of measurement | defaults to undefined|


### Return type

**Array<EnergeticsMeasurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsOrganizationsGet**
> V2EnergeticsOrganizationsGet200Response v2EnergeticsOrganizationsGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let full: boolean; //Display full organization data. (optional) (default to false)

const { status, data } = await apiInstance.v2EnergeticsOrganizationsGet(
    full
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **full** | [**boolean**] | Display full organization data. | (optional) defaults to false|


### Return type

**V2EnergeticsOrganizationsGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsOrganizationsOrganizationIdGet**
> EnergeticsOrganizationFull v2EnergeticsOrganizationsOrganizationIdGet()


### Example

```typescript
import {
    EnergeticsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsV2Api(configuration);

let organizationId: number; //Id of organization (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsOrganizationsOrganizationIdGet(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**number**] | Id of organization | defaults to undefined|


### Return type

**EnergeticsOrganizationFull**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  -  |
|**404** | Record not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

