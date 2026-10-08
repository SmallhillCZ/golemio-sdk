# EnergeticsEnoCombinedConsumptionSeries

Per point and month one kWh source - a whole-month live source, else Energy Broker, else a partial or pro-rata figure - summed across points. Null when no source has kWh.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **string** |  | [optional] [default to undefined]
**points** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**data_from** | **string** |  | [optional] [default to undefined]
**monthly** | [**Array&lt;EnergeticsEnoCombinedConsumptionEntry&gt;**](EnergeticsEnoCombinedConsumptionEntry.md) |  | [optional] [default to undefined]
**yearly** | [**Array&lt;EnergeticsEnoCombinedConsumptionEntry&gt;**](EnergeticsEnoCombinedConsumptionEntry.md) | Sum of the picked months inside the window. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoCombinedConsumptionSeries } from 'golemio-api';

const instance: EnergeticsEnoCombinedConsumptionSeries = {
    unit,
    points,
    data_from,
    monthly,
    yearly,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
