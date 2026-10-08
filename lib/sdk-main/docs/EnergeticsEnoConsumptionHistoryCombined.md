# EnergeticsEnoConsumptionHistoryCombined

One continuous kWh series per commodity across all sources. Heat and water are out of scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electricity** | [**EnergeticsEnoCombinedConsumptionSeries**](EnergeticsEnoCombinedConsumptionSeries.md) |  | [optional] [default to undefined]
**gas** | [**EnergeticsEnoCombinedConsumptionSeries**](EnergeticsEnoCombinedConsumptionSeries.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionHistoryCombined } from 'golemio-api';

const instance: EnergeticsEnoConsumptionHistoryCombined = {
    electricity,
    gas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
