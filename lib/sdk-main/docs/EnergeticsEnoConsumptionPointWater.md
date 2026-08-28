# EnergeticsEnoConsumptionPointWater

Water-specific data (present only for commodity = water, omitted otherwise; Porsenna-sourced)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**porsenna** | [**EnergeticsEnoPorsennaBlock**](EnergeticsEnoPorsennaBlock.md) |  | [optional] [default to undefined]
**consumption_history** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) | Per-source series for this point; empty when no source knows it. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointWater } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointWater = {
    porsenna,
    consumption_history,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
