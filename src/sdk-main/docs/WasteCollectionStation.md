# WasteCollectionStation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | [**WasteCollectionStationAccessibility**](WasteCollectionStationAccessibility.md) |  | [optional] [default to undefined]
**containers** | [**Array&lt;WasteCollectionStationContainer&gt;**](WasteCollectionStationContainer.md) |  | [optional] [default to undefined]
**district** | **string** |  | [optional] [default to undefined]
**id** | **number** | station id | [default to undefined]
**name** | **string** |  | [default to undefined]
**station_number** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**is_monitored** | **boolean** |  | [optional] [default to undefined]
**ksnko_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { WasteCollectionStation } from 'golemio-api';

const instance: WasteCollectionStation = {
    accessibility,
    containers,
    district,
    id,
    name,
    station_number,
    updated_at,
    is_monitored,
    ksnko_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
