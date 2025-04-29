# ParkingProhibitions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lpg_cng** | **boolean** | LPG/CNG vehicles permitted to enter the parking. | [default to undefined]
**bus** | **boolean** | buses permitted to enter the parking. | [default to undefined]
**truck** | **boolean** | trucks permitted to enter the parking. | [default to undefined]
**motorcycle** | **boolean** | motorcycles permitted to enter the parking. | [default to undefined]
**bicycle** | **boolean** | bicycles permitted to enter the parking. | [default to undefined]
**trailer** | **boolean** | trailers permitted to enter the parking. | [default to undefined]

## Example

```typescript
import { ParkingProhibitions } from 'golemio-api';

const instance: ParkingProhibitions = {
    lpg_cng,
    bus,
    truck,
    motorcycle,
    bicycle,
    trailer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
