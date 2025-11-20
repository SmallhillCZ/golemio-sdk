# GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **number** | Number of minutes that have to elapse before this segment starts applying (added in v2.1-RC2). | [default to undefined]
**rate** | **number** | Rate that is charged for each minute interval after the start (added in v2.1-RC2). | [default to undefined]
**interval** | **number** | Interval in minutes at which the rate of this segment is either reapplied (added in v2.1-RC2). | [default to undefined]
**end** | **number** | The minute at which the rate will no longer apply (added in v2.1-RC2). | [optional] [default to undefined]
**start_time_of_period** | **string** | {day}-{day} {time} čas zahájení platnosti účtování pro uvedené dny v týdnu, null -&gt; unlimited | [optional] [default to undefined]
**end_time_of_period** | **string** | {day}-{day} {time} čas ukončení platnosti účtování pro uvedené dny v týdnu, null -&gt; unlimited | [optional] [default to undefined]

## Example

```typescript
import { GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner } from 'golemio-api';

const instance: GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner = {
    start,
    rate,
    interval,
    end,
    start_time_of_period,
    end_time_of_period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
