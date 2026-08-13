# EnergeticsEnoConsumptionPointGas

Gas-specific data (present only for commodity = gas, omitted otherwise)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**porsenna** | [**EnergeticsEnoPorsennaBlock**](EnergeticsEnoPorsennaBlock.md) |  | [optional] [default to undefined]
**distribution** | [**EnergeticsEnoConsumptionPointGasDistribution**](EnergeticsEnoConsumptionPointGasDistribution.md) |  | [optional] [default to undefined]
**commercial** | [**EnergeticsEnoConsumptionPointGasCommercial**](EnergeticsEnoConsumptionPointGasCommercial.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointGas } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointGas = {
    porsenna,
    distribution,
    commercial,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
