# ParkingSpaceTariff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tariff_id** | **string** |  | [default to undefined]
**source** | **string** |  | [default to undefined]
**last_updated** | **string** |  | [default to undefined]
**payment_mode** | **string** |  | [default to undefined]
**payment_additional_description** | **string** |  | [optional] [default to undefined]
**free_of_charge** | **boolean** |  | [default to undefined]
**url_link_address** | **string** |  | [optional] [default to undefined]
**charge_band_name** | **string** |  | [default to undefined]
**payment_methods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**charge_currency** | **string** |  | [default to undefined]
**allowed_vehicle_type** | **string** |  | [optional] [default to undefined]
**allowed_fuel_type** | **string** |  | [optional] [default to undefined]
**charges** | [**Array&lt;ParkingSpaceTariffCharge&gt;**](ParkingSpaceTariffCharge.md) |  | [optional] [default to undefined]
**reservation_url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingSpaceTariff } from 'golemio-api';

const instance: ParkingSpaceTariff = {
    tariff_id,
    source,
    last_updated,
    payment_mode,
    payment_additional_description,
    free_of_charge,
    url_link_address,
    charge_band_name,
    payment_methods,
    charge_currency,
    allowed_vehicle_type,
    allowed_fuel_type,
    charges,
    reservation_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
