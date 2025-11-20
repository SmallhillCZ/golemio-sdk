# WasteCollectionStationContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleaning_frequency** | [**WasteCollectionStationContainerCleaningFrequency**](WasteCollectionStationContainerCleaningFrequency.md) |  | [optional] [default to undefined]
**container_type** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**trash_type** | [**WasteCollectionStationContainerTrashType**](WasteCollectionStationContainerTrashType.md) |  | [optional] [default to undefined]
**last_measurement** | [**WasteCollectionStationContainerLastMeasurement**](WasteCollectionStationContainerLastMeasurement.md) |  | [optional] [default to undefined]
**last_pick** | **string** |  | [optional] [default to undefined]
**ksnko_id** | **number** |  | [optional] [default to undefined]
**container_id** | **number** |  | [optional] [default to undefined]
**sensor_code** | **string** |  | [optional] [default to undefined]
**sensor_supplier** | **string** |  | [optional] [default to undefined]
**sensor_id** | **string** |  | [optional] [default to undefined]
**is_monitored** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WasteCollectionStationContainer } from 'golemio-api';

const instance: WasteCollectionStationContainer = {
    cleaning_frequency,
    container_type,
    description,
    trash_type,
    last_measurement,
    last_pick,
    ksnko_id,
    container_id,
    sensor_code,
    sensor_supplier,
    sensor_id,
    is_monitored,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
