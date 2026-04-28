# RepeatOnlyTimes

Daily repeat schedule for the infotext.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_start** | **string** | Daily repeat window start time (HH:MM:SS, Europe/Prague). Null when repeat is disabled. | [default to undefined]
**time_end** | **string** | Daily repeat window end time (HH:MM:SS, Europe/Prague). When start &gt;&#x3D; end the window wraps around midnight. Null when repeat is disabled. | [default to undefined]

## Example

```typescript
import { RepeatOnlyTimes } from 'golemio-public-transport-api';

const instance: RepeatOnlyTimes = {
    time_start,
    time_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
