# ParkingCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The UUID identifier for the charge. | [default to undefined]
**charge** | **string** | Charge amount. | [default to undefined]
**charge_type** | **string** | Type of charge. | [default to undefined]
**charge_order_index** | **number** | Order index for charges. | [default to undefined]
**charge_interval** | **number** | Charge interval (in seconds). | [default to undefined]
**max_iterations_of_charge** | **number** | Maximum iterations of charge. | [optional] [default to undefined]
**min_iterations_of_charge** | **number** | Minimum iterations of charge. | [optional] [default to undefined]
**valid_from** | **string** | Valid from date. | [default to undefined]
**valid_to** | **string** | Valid to date. | [optional] [default to undefined]
**periods_of_time** | [**Array&lt;ParkingPeriodsOfTime&gt;**](ParkingPeriodsOfTime.md) | Array of Periods of Time objects. | [optional] [default to undefined]

## Example

```typescript
import { ParkingCharge } from 'golemio-api';

const instance: ParkingCharge = {
    id,
    charge,
    charge_type,
    charge_order_index,
    charge_interval,
    max_iterations_of_charge,
    min_iterations_of_charge,
    valid_from,
    valid_to,
    periods_of_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
