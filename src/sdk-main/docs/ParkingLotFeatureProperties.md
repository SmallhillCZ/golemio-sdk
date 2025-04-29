# ParkingLotFeatureProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**ParkingLotFeaturePropertiesId**](ParkingLotFeaturePropertiesId.md) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**parking_type** | [**ParkingLotFeaturePropertiesParkingType**](ParkingLotFeaturePropertiesParkingType.md) |  | [optional] [default to undefined]
**num_of_free_places** | **number** |  | [default to undefined]
**num_of_taken_places** | **number** |  | [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**total_num_of_places** | **number** |  | [default to undefined]
**average_occupancy** | [**ParkingLotFeaturePropertiesAverageOccupancy**](ParkingLotFeaturePropertiesAverageOccupancy.md) |  | [optional] [default to undefined]
**area** | **number** |  | [optional] [default to undefined]
**district** | **string** |  | [optional] [default to undefined]
**address** | [**ParkingLotFeaturePropertiesAddress**](ParkingLotFeaturePropertiesAddress.md) |  | [optional] [default to undefined]
**last_updated** | **number** |  | [optional] [default to undefined]
**payment_link** | **string** |  | [optional] [default to undefined]
**payment_shortname** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingLotFeatureProperties } from 'golemio-api';

const instance: ParkingLotFeatureProperties = {
    id,
    name,
    parking_type,
    num_of_free_places,
    num_of_taken_places,
    updated_at,
    total_num_of_places,
    average_occupancy,
    area,
    district,
    address,
    last_updated,
    payment_link,
    payment_shortname,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
