# GBFSVehicleTypesJsonVehicleTypesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vehicle_type_id** | **string** | Unique identifier of a vehicle type. | [default to undefined]
**form_factor** | **string** | The vehicle\&#39;s general form factor. | [default to undefined]
**propulsion_type** | **string** | The primary propulsion type of the vehicle. | [default to undefined]
**max_range_meters** | **number** | The furthest distance in meters that the vehicle can travel without recharging or refueling when it has the maximum amount of energy potential. | [optional] [default to undefined]
**name** | **string** | The public name of this vehicle type. | [optional] [default to undefined]

## Example

```typescript
import { GBFSVehicleTypesJsonVehicleTypesInner } from 'golemio-api';

const instance: GBFSVehicleTypesJsonVehicleTypesInner = {
    vehicle_type_id,
    form_factor,
    propulsion_type,
    max_range_meters,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
