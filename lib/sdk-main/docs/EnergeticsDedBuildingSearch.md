# EnergeticsDedBuildingSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** |  | [default to undefined]
**matched_exactly** | **boolean** | True when the query resolved to an exact EAN, EIC, OM identifier or GID. In that case the results contain only exact matches. | [default to undefined]
**results** | [**Array&lt;EnergeticsDedBuildingSearchResult&gt;**](EnergeticsDedBuildingSearchResult.md) |  | [default to undefined]

## Example

```typescript
import { EnergeticsDedBuildingSearch } from 'golemio-api';

const instance: EnergeticsDedBuildingSearch = {
    query,
    matched_exactly,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
