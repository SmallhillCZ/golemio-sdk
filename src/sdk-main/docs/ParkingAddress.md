# ParkingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_formatted** | **string** | Formatted address of the parking location. | [optional] [default to undefined]
**country** | **string** | Country of the parking location. | [optional] [default to undefined]
**locality** | **string** | Locality of the parking location. | [optional] [default to undefined]
**region** | **string** | Region of the parking location. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the parking location. | [optional] [default to undefined]
**street_address** | **string** | Street address of the parking location. | [optional] [default to undefined]
**area** | **number** | Area of the parking lot in square meters. | [optional] [default to undefined]
**house_number** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingAddress } from 'golemio-api';

const instance: ParkingAddress = {
    address_formatted,
    country,
    locality,
    region,
    postal_code,
    street_address,
    area,
    house_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
