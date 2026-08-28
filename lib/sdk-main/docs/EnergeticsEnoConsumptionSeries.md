# EnergeticsEnoConsumptionSeries

One source\'s view of one commodity, for one unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** |  | [optional] [default to undefined]
**unit** | **string** | Electricity is kWh. Metered gas is m3 (from the PPAS operating difference) or Nm3 where only the converted difference exists - a point whose unit changes mid-window appears as two series with complementary gaps, which is why unit is part of the key. Porsenna carries its own lowercase unit. | [optional] [default to undefined]
**is_metered** | **boolean** | False for invoiced (billed and allocated) figures, true for meter readings. | [optional] [default to undefined]
**points** | **Array&lt;string&gt;** | Consumption points contributing to this series. | [optional] [default to undefined]
**data_from** | **string** | Earliest period this series has any value for; null when it has none. | [optional] [default to undefined]
**monthly** | [**Array&lt;EnergeticsEnoConsumptionEntry&gt;**](EnergeticsEnoConsumptionEntry.md) | &#x60;months&#x60; entries, chronological, null-filled where the source has nothing. Empty when the source reports only yearly aggregates (Porsenna) - its data is in &#x60;yearly&#x60;. | [optional] [default to undefined]
**yearly** | [**Array&lt;EnergeticsEnoConsumptionEntry&gt;**](EnergeticsEnoConsumptionEntry.md) | One entry per calendar year the window touches, plus any earlier year that has data - Porsenna reaches back further than any monthly source and is not truncated to the months window. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionSeries } from 'golemio-api';

const instance: EnergeticsEnoConsumptionSeries = {
    source,
    unit,
    is_metered,
    points,
    data_from,
    monthly,
    yearly,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
