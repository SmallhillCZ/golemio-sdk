# EnergeticsEnoPorsennaBlock

Porsenna (e-manazer) device detail with sub-meters. The device\'s consumption is in the point\'s `consumption_history` as the `porsenna` series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**sub_devices** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoPorsennaBlock } from 'golemio-api';

const instance: EnergeticsEnoPorsennaBlock = {
    device,
    sub_devices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
