# EnergeticsEnoHeatSources

Heat sources (boiler rooms) recorded for the building. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of heat sources recorded for this building. | [optional] [default to undefined]
**total_rated_output_kw** | **number** | Sum of &#x60;rated_output_kw&#x60; over the building\&#39;s heat sources | [optional] [default to undefined]
**sources** | [**Array&lt;EnergeticsEnoHeatSourcesSourcesInner&gt;**](EnergeticsEnoHeatSourcesSourcesInner.md) | The individual appliances, strongest rated output first. . | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoHeatSources } from 'golemio-api';

const instance: EnergeticsEnoHeatSources = {
    count,
    total_rated_output_kw,
    sources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
