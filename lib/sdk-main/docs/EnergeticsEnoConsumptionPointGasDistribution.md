# EnergeticsEnoConsumptionPointGasDistribution

Latest non-canceled PPAS distribution invoice for this EIC with its installation, billed meter periods and priced lines. Devices and prices are scoped to this point\'s installation, so another installation on the same invoice does not leak in. Null when no distribution invoice knows the point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**EnergeticsEnoGasInvoice**](EnergeticsEnoGasInvoice.md) |  | [optional] [default to undefined]
**installation** | [**EnergeticsEnoGasInstallation**](EnergeticsEnoGasInstallation.md) |  | [optional] [default to undefined]
**devices** | [**Array&lt;EnergeticsEnoGasInvoiceDevice&gt;**](EnergeticsEnoGasInvoiceDevice.md) |  | [optional] [default to undefined]
**prices** | [**Array&lt;EnergeticsEnoGasInvoicePrice&gt;**](EnergeticsEnoGasInvoicePrice.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointGasDistribution } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointGasDistribution = {
    invoice,
    installation,
    devices,
    prices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
