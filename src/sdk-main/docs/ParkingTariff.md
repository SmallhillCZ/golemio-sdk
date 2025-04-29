# ParkingTariff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The UUID identifier for the tariff. | [default to undefined]
**charge_bands** | [**Array&lt;ParkingChargeBand&gt;**](ParkingChargeBand.md) | Array of Charge Band objects that represent tariff categories for different users. Items are sorted by charge_band_name. | [default to undefined]

## Example

```typescript
import { ParkingTariff } from 'golemio-api';

const instance: ParkingTariff = {
    id,
    charge_bands,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
