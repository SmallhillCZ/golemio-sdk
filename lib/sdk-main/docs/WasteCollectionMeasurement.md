# WasteCollectionMeasurement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | container id | [default to undefined]
**sensor_code** | **string** |  | [default to undefined]
**percent_calculated** | **number** |  | [default to undefined]
**upturned** | **number** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**battery_status** | **number** |  | [optional] [default to undefined]
**measured_at_utc** | **string** |  | [default to undefined]
**prediction_utc** | **string** | vendor prediction of maximum fullness | [optional] [default to undefined]
**firealarm** | **number** |  | [optional] [default to undefined]
**updated_at** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { WasteCollectionMeasurement } from 'golemio-api';

const instance: WasteCollectionMeasurement = {
    id,
    sensor_code,
    percent_calculated,
    upturned,
    temperature,
    battery_status,
    measured_at_utc,
    prediction_utc,
    firealarm,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
