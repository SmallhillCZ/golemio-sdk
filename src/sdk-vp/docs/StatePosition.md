# StatePosition

- `at_stop` - The position is tracking and the closest anchor point or metro rail track segment is a stop. - `before_track` - The position is not tracking and either the trip\'s previous position is not known, or the previous position\'s state is `at_stop` or `on_track`. - `before_track_delayed` - The position has a delay prediction based on the vehicle\'s previous trip. - `canceled` - The position is canceled. - `off_track` - The position is tracking and the vehicle is 200+ meters from the closest anchor point or metro rail track segment of its track. For metro positions, it is additionally required that the vehicle\'s message attributes `tm` and `odch` or less than or equal to the arrival to the final stop. - `on_track` - The position is tracking, but is neither `at_stop` nor `off_track`.  The following states also exist internally but are excluded from the API output: - `after_track` - The position is not tracking and the trip\'s last known position is tracking. For metro positions, this can also mean that it is tracking, the vehicle is 200+ meters from the closest metro rail track segment of its track and the vehicle\'s message attributes `tm` and `odch` or higher than the arrival to the final stop. For other positions from TCP sources (DPP buses and trams), this can also mean that it is tracking and the vehicle sent a message while at the final stop or sent a message with the `tjr` attribute higher than the arrival to the final stop. - `after_track_delayed` - The same as `after_track`, but the position always has defined delay (not null) if possible to deduct from GTFS static data and origin timestamp. Essentially, it means the vehicle is `at_stop` at the very last stop of the trip. The delay is also propagated to the next trip of the vehicle, unlike the `after_track` state. - `duplicate` - The position is not tracking, the trip\'s last known position is tracking and there is another position with identical `origin_timestamp`. - `invisible` - The position is not tracking and either:     - the trip\'s previous position is not known or the previous position\'s state is `at_stop` or `on_track`, and the vehicle is on its way from the garage;     - or the trip\'s last known position is tracking and the vehicle is on its way to the garage. - `mismatched` - The position does not make sense (e.g. it was sent late and thus has a mismatched stop sequence). - `not_public` - The position belongs to a non-public trip (trip without run schedule). - `unknown` - The position is not yet processed (or was determined to never be processed) or has been invalidated (e.g. due to a vehicle repeating some part of the trip). 

## Enum

* `AtStop` (value: `'at_stop'`)

* `BeforeTrack` (value: `'before_track'`)

* `BeforeTrackDelayed` (value: `'before_track_delayed'`)

* `Canceled` (value: `'canceled'`)

* `OffTrack` (value: `'off_track'`)

* `OnTrack` (value: `'on_track'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
