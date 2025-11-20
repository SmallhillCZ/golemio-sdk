# WasteCollectionV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWCStations**](#getwcstations) | **GET** /v2/sortedwastestations | GET All Waste Collection Stations|

# **getWCStations**
> WasteCollectionStationFeatureCollection getWCStations()

**Trash type**<br /> | 1 | Barevné sklo | Tinted glass |<br /> | 2 | Elektrozařízení | Electric waste |<br /> | 3 | Kovy | Metals |<br /> | 4 | Nápojové kartóny | Beverage cartons |<br /> | 5 | Papír | Paper |<br /> | 6 | Plast | Plastics |<br /> | 7 | Čiré sklo | Clear glass |<br /> | 8 | Jedlé tuky a oleje | Edible fats and oils |<br /> | 9 | Multikomoditní sběr | Multicommodity |<br /> <br /> **Cleaning Frequency**<br /> | Value | 1st digit - period duration | 2nd digit - frequency |<br /> Example:<br /> | `13` | `1` | `3` | 3 times per 1 week |<br /> | `61` | `6` | `1` | Once per 6 weeks |<br /> Code `99` stands for dynamic frequency.<br />

### Example

```typescript
import {
    WasteCollectionV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new WasteCollectionV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first) (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter (optional) (default to undefined)
let districts: string; //Filter by Prague city districts (slug) separated by comma (optional) (default to undefined)
let accessibility: Array<number>; //Filter by accessibility id<br /> | 1 | volně | accessible |<br /> | 2 | obyvatelům domu | only for house residents |<br /> | 3 | neznámá dostupnost | unknown | (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)
let onlyMonitored: boolean; //Filter only stations with at least one \"smart\" container with sensor for measurements and pickups (optional) (default to undefined)
let id: number; //Identical to ksnkoId, displays station containers with given id (now is used KSNKO ID as the main identifier) (optional) (default to undefined)
let ksnkoId: number; //KSNKO identifier of a container, shows only stations that posess containers with this ID (optional) (default to undefined)

const { status, data } = await apiInstance.getWCStations(
    latlng,
    range,
    districts,
    accessibility,
    limit,
    offset,
    onlyMonitored,
    id,
    ksnkoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first) | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in meters (range query). Depends on the latlng parameter | (optional) defaults to undefined|
| **districts** | [**string**] | Filter by Prague city districts (slug) separated by comma | (optional) defaults to undefined|
| **accessibility** | **Array&lt;number&gt;** | Filter by accessibility id&lt;br /&gt; | 1 | volně | accessible |&lt;br /&gt; | 2 | obyvatelům domu | only for house residents |&lt;br /&gt; | 3 | neznámá dostupnost | unknown | | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|
| **onlyMonitored** | [**boolean**] | Filter only stations with at least one \&quot;smart\&quot; container with sensor for measurements and pickups | (optional) defaults to undefined|
| **id** | [**number**] | Identical to ksnkoId, displays station containers with given id (now is used KSNKO ID as the main identifier) | (optional) defaults to undefined|
| **ksnkoId** | [**number**] | KSNKO identifier of a container, shows only stations that posess containers with this ID | (optional) defaults to undefined|


### Return type

**WasteCollectionStationFeatureCollection**

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

