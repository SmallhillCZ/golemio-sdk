# EnergeticsEnoPorsennaBlock

Porsenna (e-manazer) device detail with sub-meters and yearly consumption aggregates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**sub_devices** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**yearly_consumption** | [**Array&lt;EnergeticsEnoPorsennaBlockYearlyConsumptionInner&gt;**](EnergeticsEnoPorsennaBlockYearlyConsumptionInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoPorsennaBlock } from 'golemio-api';

const instance: EnergeticsEnoPorsennaBlock = {
    device,
    sub_devices,
    yearly_consumption,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
