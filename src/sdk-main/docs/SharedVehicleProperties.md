# SharedVehicleProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**in_rack** | **boolean** |  | [optional] [default to undefined]
**label** | **string** |  | [default to undefined]
**location_note** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**res_url** | **string** |  | [default to undefined]
**company** | [**SharedVehicleCompany**](SharedVehicleCompany.md) |  | [optional] [default to undefined]
**estimated_trip_length_in_km** | **number** |  | [optional] [default to undefined]
**type** | [**SharedVehicleType**](SharedVehicleType.md) |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SharedVehicleProperties } from 'golemio-api';

const instance: SharedVehicleProperties = {
    id,
    in_rack,
    label,
    location_note,
    name,
    res_url,
    company,
    estimated_trip_length_in_km,
    type,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
