# EnergeticsEnoConsumptionHistory

Consumption per commodity per source. An empty array for a commodity means no source knows this building at all, which is distinct from a series of nulls - that means the source knows the point but not those periods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period_from** | **string** |  | [optional] [default to undefined]
**period_to** | **string** | Always the last complete month. | [optional] [default to undefined]
**months** | **number** |  | [optional] [default to undefined]
**measurement_data_from** | **string** | Earliest month (&#x60;YYYY-MM&#x60;) with data from a metered source; null when no metered source has monthly data. Explains the leading nulls - meter data starts in 2025 platform-wide. A yearly-only series does not count; its reach-back stays visible in the series\&#39; own &#x60;data_from&#x60;. | [optional] [default to undefined]
**has_shared_points** | **boolean** | True when a contributing consumption point is also mapped to another building. The totals still count such a point in full - that is what its meters measured - so this flag is how a client learns the figure is not exclusive to this building. It is true for both sides of a shared point, primary or not; the points\&#39; &#x60;shared_with&#x60; says which buildings those are. | [optional] [default to undefined]
**electricity** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) |  | [optional] [default to undefined]
**gas** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) |  | [optional] [default to undefined]
**heat** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) |  | [optional] [default to undefined]
**water** | [**Array&lt;EnergeticsEnoConsumptionSeries&gt;**](EnergeticsEnoConsumptionSeries.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionHistory } from 'golemio-api';

const instance: EnergeticsEnoConsumptionHistory = {
    period_from,
    period_to,
    months,
    measurement_data_from,
    has_shared_points,
    electricity,
    gas,
    heat,
    water,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
