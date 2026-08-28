# EnergeticsEnoConsumptionPointElectricity

Electricity-specific data (present only for commodity = electricity, omitted otherwise)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**EnergeticsEnoElectricityMetadata**](EnergeticsEnoElectricityMetadata.md) | Latest available month of PRE metadata for the EAN; null when PRE has never reported it. | [optional] [default to undefined]
**porsenna** | [**EnergeticsEnoPorsennaBlock**](EnergeticsEnoPorsennaBlock.md) |  | [optional] [default to undefined]
**consumption_history** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) | Per-source series for this point; empty when no source knows it. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointElectricity } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointElectricity = {
    metadata,
    porsenna,
    consumption_history,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
