# EnergeticsEnoConsumptionPointElectricity

Electricity-specific data (present only for commodity = electricity, omitted otherwise)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **{ [key: string]: any; }** | Latest available month of PRE metadata for the EAN | [optional] [default to undefined]
**porsenna** | [**EnergeticsEnoPorsennaBlock**](EnergeticsEnoPorsennaBlock.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPointElectricity } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPointElectricity = {
    metadata,
    porsenna,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
