# ParkingMachineProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the parking machine. Formatted as primary_source-primary_source_id | [default to undefined]
**primary_source** | **string** | The primary source of the parking machine. | [default to undefined]
**primary_source_id** | **string** | The ID defined by the primary source. | [optional] [default to undefined]
**code** | **string** | TSK parking machine identification code. | [optional] [default to undefined]
**machine_type** | **string** | The type of the parking machine.   * &#x60;payment_machine&#x60; - a facility where payment can be made for parking; often equipped with payment options   * &#x60;info_box&#x60; - an installation providing information and possibly a QR code, without payment capabilities.  | [optional] [default to undefined]
**valid_from** | **string** | The start date when the parking machine is valid. | [default to undefined]
**tariff_id** | **string** | The UUID identifier for the tariff connected to the parking machine. | [optional] [default to undefined]

## Example

```typescript
import { ParkingMachineProperties } from 'golemio-api';

const instance: ParkingMachineProperties = {
    id,
    primary_source,
    primary_source_id,
    code,
    machine_type,
    valid_from,
    tariff_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
