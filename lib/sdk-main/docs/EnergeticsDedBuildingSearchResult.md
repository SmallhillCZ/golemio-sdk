# EnergeticsDedBuildingSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**designation** | **string** |  | [default to undefined]
**registration_unit** | [**EnergeticsEnoRegistrationUnit**](EnergeticsEnoRegistrationUnit.md) | Evidenční jednotka (eno_ciselnik_evidencni_jednotka) resolved through eno_majetek; null when the building has no majetek record. Its name is part of the search vector. | [default to undefined]
**address** | **string** | Main address of the building. | [default to undefined]
**addresses** | **Array&lt;string&gt;** | Every distinct address of the building, the main one first. | [default to undefined]
**matched_by** | **string** |  | [default to undefined]
**matched_value** | **string** | The identifier that matched. Null for non-exact matches. | [default to undefined]
**score** | **number** | Relevance score. Exact matches always score 1000. | [default to undefined]
**identifiers** | [**EnergeticsDedBuildingSearchResultIdentifiers**](EnergeticsDedBuildingSearchResultIdentifiers.md) |  | [default to undefined]
**geometry** | [**EnergeticsDedBuildingSearchResultGeometry**](EnergeticsDedBuildingSearchResultGeometry.md) |  | [default to undefined]
**bbox** | **Array&lt;number&gt;** | [minLon, minLat, maxLon, maxLat] in WGS84, for zooming the map. | [default to undefined]
**centroid** | [**EnergeticsDedBuildingSearchResultCentroid**](EnergeticsDedBuildingSearchResultCentroid.md) |  | [default to undefined]
**geometry_source** | **string** | Source of the geometry, null when the building has none. | [default to undefined]
**has_building_record** | **boolean** | False when the GID is known only through the consumption-point mapping or Porsenna and has no eno_budova record. Such results are ranked below described buildings. | [default to undefined]
**active_points_count** | **number** |  | [default to undefined]

## Example

```typescript
import { EnergeticsDedBuildingSearchResult } from 'golemio-api';

const instance: EnergeticsDedBuildingSearchResult = {
    gid,
    name,
    designation,
    registration_unit,
    address,
    addresses,
    matched_by,
    matched_value,
    score,
    identifiers,
    geometry,
    bbox,
    centroid,
    geometry_source,
    has_building_record,
    active_points_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
