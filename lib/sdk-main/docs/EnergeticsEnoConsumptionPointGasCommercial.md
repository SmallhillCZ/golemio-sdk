# EnergeticsEnoConsumptionPointGasCommercial

Latest non-canceled PPAS commercial invoice for this EIC, in the same shape as `distribution`. Null when no commercial invoice knows the point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**EnergeticsEnoGasInvoice**](EnergeticsEnoGasInvoice.md) |  | [optional] [default to undefined]
**installation** | [**EnergeticsEnoGasInstallation**](EnergeticsEnoGasInstallation.md) |  | [optional] [default to undefined]
**devices** | [**Array&lt;EnergeticsEnoGasInvoiceDevice&gt;**](EnergeticsEnoGasInvoiceDevice.md) |  | [optional] [default to undefined]
**prices** | [**Array&lt;EnergeticsEnoGasInvoicePrice&gt;**](EnergeticsEnoGasInvoicePrice.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointGasCommercial } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointGasCommercial = {
    invoice,
    installation,
    devices,
    prices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
