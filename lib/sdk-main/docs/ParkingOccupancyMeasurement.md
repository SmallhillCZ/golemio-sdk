# ParkingOccupancyMeasurement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parking_id** | **string** |  | [optional] [default to undefined]
**primary_source** | **string** | The primary source of the parking location. Assigned by us. | [optional] [default to undefined]
**primary_source_id** | **string** | The ID defined by the primary source. As in the source data. | [optional] [default to undefined]
**has_free_spots** | **boolean** |  | [optional] [default to undefined]
**total_spot_number** | **number** |  | [optional] [default to undefined]
**free_spot_number** | **number** |  | [optional] [default to undefined]
**closed_spot_number** | **number** |  | [optional] [default to undefined]
**occupied_spot_number** | **number** |  | [optional] [default to undefined]
**last_updated** | **string** | The date and time when the info about the occupancy measurement was last updated. | [optional] [default to undefined]

## Example

```typescript
import { ParkingOccupancyMeasurement } from 'golemio-api';

const instance: ParkingOccupancyMeasurement = {
    parking_id,
    primary_source,
    primary_source_id,
    has_free_spots,
    total_spot_number,
    free_spot_number,
    closed_spot_number,
    occupied_spot_number,
    last_updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
