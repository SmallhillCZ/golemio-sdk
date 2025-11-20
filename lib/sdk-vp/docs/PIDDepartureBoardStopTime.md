# PIDDepartureBoardStopTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predicted** | **string** | Time of arrival/departure including realtime delay as an ISO String (UTC). Is &#x60;null&#x60; on start/end stops. Is same as scheduled time when no delay is available. Is &#x60;null&#x60; on first/last stops. | [default to undefined]
**scheduled** | **string** | Time of arrival/departure as ISO string (UTC). | [default to undefined]
**minutes** | **string** | Number of minutes till departure. If it is less than 30 second it returns value \&quot;&lt;1\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { PIDDepartureBoardStopTime } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardStopTime = {
    predicted,
    scheduled,
    minutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
