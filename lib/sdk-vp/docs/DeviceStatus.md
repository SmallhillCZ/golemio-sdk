# DeviceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_contact** | **string** | Timestamp of the device\&#39;s last reported contact. Null means the device has never reported a status (not yet in service, decommissioned but not physically removed, or its source cannot be monitored). | [default to undefined]
**status** | **string** | Current operational status of the device, as reported by DCIP. Approximate meaning of the values: &#x60;ok&#x60; — device is working normally; &#x60;not_ok&#x60; — device has been down for a longer continuous period (it should be working, but is not); &#x60;intermittent_outages&#x60; — many short outages in a row; &#x60;not_monitored&#x60; — device is registered, but there is no way to monitor it; &#x60;off&#x60; — device is not working and this is known (set manually); &#x60;not_charging&#x60; — reserved (device works, but is not charging); &#x60;low_power&#x60; — reserved (device works, but its battery is drained). | [default to undefined]

## Example

```typescript
import { DeviceStatus } from 'golemio-public-transport-api';

const instance: DeviceStatus = {
    last_contact,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
