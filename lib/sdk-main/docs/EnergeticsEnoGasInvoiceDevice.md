# EnergeticsEnoGasInvoiceDevice

One billed meter period of the invoice. `kind` is a SAP code and the same gas can appear under several of them in different dimensions, so these rows are the billing detail, not a series to sum — the summed and month-allocated figures are in `consumption_history`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_serial_number** | **string** |  | [optional] [default to undefined]
**date_from** | **string** |  | [optional] [default to undefined]
**date_to** | **string** |  | [optional] [default to undefined]
**reading_type** | **string** | STANDARD or CORRECTION. | [optional] [default to undefined]
**type** | **string** | Meter type. | [optional] [default to undefined]
**kind** | **string** | SAP code of the billed quantity (ZIZWC, ZIABN3, …). | [optional] [default to undefined]
**reading_from** | **number** |  | [optional] [default to undefined]
**reading_to** | **number** |  | [optional] [default to undefined]
**consumption** | **number** | Denominated by &#x60;unit&#x60;, which is not always m³. | [optional] [default to undefined]
**unit** | **string** |  | [optional] [default to undefined]
**meter_reading_type** | **string** |  | [optional] [default to undefined]
**gas_consumption_kwh** | **number** | 0 means \&quot;not supplied\&quot; rather than zero. | [optional] [default to undefined]
**volume_coefficient** | **number** |  | [optional] [default to undefined]
**combustion_heat** | **number** | kWh/m³; 0 means \&quot;not supplied\&quot; rather than zero. | [optional] [default to undefined]
**normometers_nm3** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoGasInvoiceDevice } from 'golemio-api';

const instance: EnergeticsEnoGasInvoiceDevice = {
    device_serial_number,
    date_from,
    date_to,
    reading_type,
    type,
    kind,
    reading_from,
    reading_to,
    consumption,
    unit,
    meter_reading_type,
    gas_consumption_kwh,
    volume_coefficient,
    combustion_heat,
    normometers_nm3,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
