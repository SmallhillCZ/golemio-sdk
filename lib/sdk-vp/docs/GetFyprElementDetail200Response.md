# GetFyprElementDetail200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Server-generated UUID primary key. Immutable after creation. | [readonly] [default to undefined]
**source_created_at** | **string** | Timestamp when the record was first created in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**source_updated_at** | **string** | Timestamp of the most recent update in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [readonly] [default to undefined]
**source_published_at** | **string** | Timestamp when the record was published in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**document_id** | **string** | Unique document identifier sourced from the upstream CMS (Strapi). Used as the stable external reference for deduplication. | [default to undefined]
**uid** | **string** | Optional external UUID assigned to the physical element by the field operations team. May be null for elements not yet assigned. | [optional] [default to undefined]
**kind** | **string** | Discriminator field identifying the element type. Determines which typed schema applies (Totem, InformationPanel, DisplayCase, Obelisk, Signpost). | [default to undefined]
**name** | **string** | Human-readable name of the element. May be null. | [optional] [default to undefined]
**state** | [**ElementStateEnum**](ElementStateEnum.md) | Lifecycle state of the element. May not be null. | [optional] [default to undefined]
**owner** | [**OwnerEnum**](OwnerEnum.md) | Organization or entity that owns the element. May be null. | [optional] [default to undefined]
**manager** | [**ManagerEnum**](ManagerEnum.md) | Organization or entity that manages the element. May be null. | [optional] [default to undefined]
**city_district** | [**CityDistrictEnum**](CityDistrictEnum.md) | Prague city district where the element is physically located. May be null. | [optional] [default to undefined]
**lat** | **number** | WGS-84 latitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**lon** | **number** | WGS-84 longitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**map_link** | **string** | URL to an external map view showing the element location. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**planned_year_of_realization** | **string** | Year in which the element is planned to be realized or installed. May be null. | [optional] [default to undefined]
**note** | **string** | Free-text operational note attached to the element by field staff. May be null. | [optional] [default to undefined]
**handover** | **boolean** | Indicates whether the element has been handed over to the maintenance team. May be null if handover status is unknown. | [optional] [default to undefined]
**handover_date** | **string** | Date on which the element was formally handed over to the maintenance team. ISO 8601 date. May be null. | [optional] [default to undefined]
**stop_name** | **string** | Name of the public transport stop associated with this totem. May be null. | [optional] [default to undefined]
**stop_direction** | **string** | Direction label shown on the panel for the associated stop. May be null. | [optional] [default to undefined]
**platform_code** | **string** | Platform or stand identifier within the stop. May be null. | [optional] [default to undefined]
**stop_type** | **Array&lt;string&gt;** | Transport mode type at the associated stop (e.g. bus, tram, metro). The source is single-select, so the array holds at most one value; it remains an array for backward compatibility. May be null. | [optional] [default to undefined]
**thmp_stop_id** | **string** | Stop identifier in the THMP registry. May be null. | [optional] [default to undefined]
**shelter_type** | **string** | Type of the stop shelter (přístřešek) associated with this panel (e.g. \&quot;Repasovaný\&quot;, \&quot;Olgoj Chorchoj\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**shelter_id** | **string** | Identifier of the shelter associated with this panel. May be null. | [optional] [default to undefined]
**qr_code** | **string** | URL or value encoded in the QR code affixed to this totem for field identification. May be null. | [optional] [default to undefined]
**supplier** | **string** | Name of the supplier or manufacturer of this totem. May be null. | [optional] [default to undefined]
**comments** | **string** | Free-text comments or operational remarks about this totem. May be null. | [optional] [default to undefined]
**asw_node_id** | **string** | Node identifier in the ASW system. May be null. | [optional] [default to undefined]
**asw_stop_id** | **string** | Stop identifier from the ASW system on the ASW node. May be null. | [optional] [default to undefined]
**location_description** | **string** | Free-text description of the precise installation location. May be null. | [optional] [default to undefined]
**street_name** | **string** | Name of the street where this totem is located. May be null. | [optional] [default to undefined]
**ropid_element_id** | **string** | Element identifier assigned by ROPID in their own internal register. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**price_without_vat** | **number** | Procurement or installation price of the signpost, excluding VAT. Currency is CZK. May be null if pricing data is unavailable. | [optional] [default to undefined]
**serial_number** | **string** | Manufacturer\&#39;s serial number of this totem unit. May be null. | [optional] [default to undefined]
**thmp_element_number** | **string** | Element number assigned within the THMP register. May be null. | [optional] [default to undefined]
**cleaning_frequency** | **string** | Scheduled cleaning frequency for this totem. Free-text field. May be null. | [optional] [default to undefined]
**land_parcel_number** | **string** | Cadastral land parcel number of the plot on which the signpost is installed. May be null. | [optional] [default to undefined]
**land_owner** | [**LandOwnerEnum**](LandOwnerEnum.md) | Owner of the land parcel where the signpost is installed. May be null. | [optional] [default to undefined]
**workday_boarding_count** | **number** | Average number of passengers boarding at this stop on a workday. Integer count. May be null. | [optional] [default to undefined]
**lines** | **string** | Comma-separated list of line numbers served at the stop. May be null. | [optional] [default to undefined]
**location_verification_on_street_light** | [**YesNoPlanEnum**](YesNoPlanEnum.md) | Whether the installation position was verified against a street light pole. May be null. | [optional] [default to undefined]
**street_light_number** | **string** | Identifier of the street light pole to which the totem is attached, if applicable. May be null. | [optional] [default to undefined]
**surface_type** | **string** | Type of ground surface at the installation site (e.g. \&quot;Asfalt\&quot;, \&quot;Dlažba\&quot;, \&quot;Mozaika\&quot;, \&quot;Zeleň\&quot;, \&quot;VO\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**connection_state** | [**YesNoPlanEnum**](YesNoPlanEnum.md) | Whether the panel is connected to power. May be null. | [optional] [default to undefined]
**connection_type** | **string** | Electrical power supply connection type (e.g. \&quot;PRE\&quot;, \&quot;VO\&quot;, \&quot;TSK\&quot;, \&quot;SŽ\&quot;, \&quot;Solární panel\&quot;, \&quot;Baterie\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**connection_mode** | **string** | Power supply mode for the panel (\&quot;Celodenní\&quot;, \&quot;Noční\&quot;, \&quot;Lze vyčlenit 24x7\&quot;). May be null. | [optional] [default to undefined]
**priority** | **number** | Installation or operational priority rank for this totem (1–5). May be null. | [optional] [default to undefined]
**investor_action** | **string** | Investor responsible for the action linked to this panel (e.g. \&quot;HMP\&quot;, \&quot;DPP\&quot;, \&quot;MČ\&quot;, \&quot;THMP\&quot;, \&quot;TSK\&quot;, \&quot;ROPID\&quot;, \&quot;SŽ\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**design_request** | **string** | Whether a design (projekce) has been requested (\&quot;ANO\&quot;, \&quot;NE\&quot;, \&quot;Zrušeno\&quot;). May be null. | [optional] [default to undefined]
**design_state** | [**PhaseStateEnum**](PhaseStateEnum.md) | Current state of the design phase. May be null. | [optional] [default to undefined]
**design_order_number** | **string** | Order number issued for the design phase. May be null. | [optional] [default to undefined]
**design_registry_publication** | [**YesNoEnum**](YesNoEnum.md) | Whether the design order was published in the public procurement registry. May be null. | [optional] [default to undefined]
**design_invoice_paid** | [**YesNoEnum**](YesNoEnum.md) | Whether the design phase invoice has been paid. May be null. | [optional] [default to undefined]
**production_order_number** | **string** | Order number issued for the production (vyroba) phase. May be null. | [optional] [default to undefined]
**production_state** | [**PhaseStateEnum**](PhaseStateEnum.md) | Current state of the production phase. May be null. | [optional] [default to undefined]
**production_registry_publication** | [**YesNoEnum**](YesNoEnum.md) | Whether the production order was published in the public procurement registry. May be null. | [optional] [default to undefined]
**production_invoice_paid** | [**YesNoEnum**](YesNoEnum.md) | Whether the production phase invoice has been paid. May be null. | [optional] [default to undefined]
**realization_request** | **boolean** | Whether a realization (realizace) request has been raised for this panel. May be null. | [optional] [default to undefined]
**realization_state** | [**PhaseStateEnum**](PhaseStateEnum.md) | Current state of the realization phase. May be null. | [optional] [default to undefined]
**realization_order_number** | **string** | Order number issued for the realization phase. May be null. | [optional] [default to undefined]
**realization_registry_publication** | [**YesNoEnum**](YesNoEnum.md) | Whether the realization order was published in the public procurement registry. May be null. | [optional] [default to undefined]
**realization_invoice_paid** | [**YesNoEnum**](YesNoEnum.md) | Whether the realization phase invoice has been paid. May be null. | [optional] [default to undefined]
**name_for_visually_impaired** | **string** | Accessible name of the stop used in audio announcements for visually impaired passengers. May be null. | [optional] [default to undefined]
**voice_day** | **string** | Voice announcement schedule for daytime operation. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**voice_night** | **string** | Voice announcement schedule for night-time operation. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**templates** | **string** | Display template identifier or name used to render content on this panel. May be null. | [optional] [default to undefined]
**presets** | **Array&lt;string&gt;** | Departure preset identifiers assigned to this panel. Null if no presets are configured | [optional] [default to undefined]
**data_source** | **string** | Data source feeding real-time information to this panel (e.g. \&quot;Golemio\&quot;, \&quot;MPV\&quot;, \&quot;GTFS-RT\&quot;, \&quot;CIS\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**imsi** | **string** | IMSI (International Mobile Subscriber Identity) of the SIM card installed in this panel. May be null. | [optional] [default to undefined]
**connection_point** | **string** | Location type where the panel is connected to power (e.g. \&quot;Přístřešek\&quot;, \&quot;VO\&quot;, \&quot;Soukromá budova\&quot;, \&quot;Ostatní\&quot;). May be null. | [optional] [default to undefined]
**connection_point_number** | **string** | Identifier of the electrical connection point used by this panel. | [optional] [default to undefined]
**foundation_type** | **string** | Type of physical foundation used to mount the panel (\&quot;Klasický\&quot;, \&quot;Plochý\&quot;, \&quot;Atyp\&quot;). May be null. | [optional] [default to undefined]
**warranty_end** | **string** | Date on which the manufacturer or installer warranty expires. ISO 8601 date. May be null. | [optional] [default to undefined]
**initial_revision** | **string** | Date of the initial (commissioning) technical revision. ISO 8601 date. May be null. | [optional] [default to undefined]
**next_revision** | **string** | Scheduled date of the next technical revision or inspection. ISO 8601 date. May be null. | [optional] [default to undefined]
**electronics_service** | **boolean** | Whether the panel is covered by an electronics service contract. May be null. | [optional] [default to undefined]
**electronics_service_end** | **string** | Date on which the electronics service contract expires. ISO 8601 date. May be null. | [optional] [default to undefined]
**asset_registered** | **boolean** | Indicates whether this totem has been registered as a fixed asset in the accounting system. May be null. | [optional] [default to undefined]
**asset_number** | **string** | Fixed asset register number assigned to this totem. May be null if not yet registered. | [optional] [default to undefined]
**insurance** | **boolean** | Indicates whether this totem is covered by an insurance policy. May be null. | [optional] [default to undefined]
**handed_over_to_ozp** | **boolean** | Whether this totem has been formally handed over to OZP (Odbor životního prostředí) for management. May be null. | [optional] [default to undefined]
**dpp_documentation_request** | **boolean** | Whether documentation for DPP (Dopravni podnik Praha) has been requested. May be null. | [optional] [default to undefined]
**dpp_documentation_handover_date** | **string** | Date on which documentation was handed over to DPP. ISO 8601 date. May be null. | [optional] [default to undefined]
**design_deadline** | **string** | Contractual deadline for completing the design phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**production_deadline** | **string** | Contractual deadline for completing the production phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**ropid_documentation_submitted** | **Array&lt;string&gt;** | List of documentation items submitted to ROPID as part of the handover package. May be null. | [optional] [default to undefined]
**ropid_documentation_handover_date** | **string** | Date on which the documentation package was handed over to ROPID. ISO 8601 date. May be null. | [optional] [default to undefined]
**dpp_documentation_submitted** | **Array&lt;string&gt;** | List of document types submitted to DPP as part of the documentation package. May be null. | [optional] [default to undefined]
**realization_deadline** | **string** | Contractual deadline for completing the realization phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**device_id** | **string** | Unique device identifier assigned to the panel\&#39;s embedded hardware unit. May be null. | [optional] [default to undefined]
**power_consumption_watt** | **number** | Rated power consumption of this totem in watts. May be null if not measured. | [optional] [default to undefined]
**electricity_supply_contract** | **string** | Identifier or reference of the electricity supply contract for this totem. May be null. | [optional] [default to undefined]
**electricity_consumption_price** | **number** | Price for electricity consumption (cena za odběr elektřiny). May be null. | [optional] [default to undefined]
**construction_type** | **string** | Construction type of the totem (\&quot;SS\&quot;, \&quot;VO\&quot;, \&quot;TV\&quot;, \&quot;Digi Panel\&quot;). May be null. | [optional] [default to undefined]
**panel_size** | **string** | Size of the totem\&#39;s display panel (\&quot;Standard\&quot;, \&quot;Atyp\&quot;, \&quot;Mini\&quot;, \&quot;Menší\&quot;). May be null. | [optional] [default to undefined]
**design_price_without_vat** | **number** | Projected design/engineering cost for this totem, excluding VAT (Czech crowns). May be null. | [optional] [default to undefined]
**production_price_without_vat** | **number** | Total production price of this totem unit, excluding VAT (Czech crowns). May be null. | [optional] [default to undefined]
**realization_price_without_vat** | **number** | Actual realization (installation) cost for this totem, excluding VAT (Czech crowns). May be null. | [optional] [default to undefined]
**producer** | **string** | Name of the panel manufacturer. Deprecated: the source field was removed in Strapi and replaced by supplier; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**producer_contact_person** | **string** | Contact person at the panel manufacturer. May be null. | [optional] [default to undefined]
**panel_technology** | **string** | Display technology of the panel (e.g. LCD, e-paper). May be null. | [optional] [default to undefined]
**panel_model** | **string** | Model designation of the panel unit. May be null. | [optional] [default to undefined]
**owner_contact** | **string** | Contact information for the element owner. May be null. | [optional] [default to undefined]
**connectivity_internet** | **string** | Internet connectivity type for the panel. May be null. | [optional] [default to undefined]
**phone_number** | **string** | Phone number associated with the panel\&#39;s SIM or connectivity. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**jis_graphic** | **boolean** | Whether this panel uses JIS (Jednotný Informační Systém) graphics. Sourced from the Strapi boolean field grafika_jis. May be null if not yet set in the source system. | [optional] [default to undefined]
**supported_functions** | **Array&lt;string&gt;** | List of functions supported by this panel, derived from a multiselect field in Strapi (podporovane_funkce). May be null. | [optional] [default to undefined]
**routes** | [**Array&lt;InformationPanelScopesRoutesInner&gt;**](InformationPanelScopesRoutesInner.md) | Preset routes grouped by preset name. | [optional] [default to undefined]
**insurance_state** | [**InsuranceStateEnum**](InsuranceStateEnum.md) | Current state of the insurance coverage for this totem. May be null. | [optional] [default to undefined]
**sheet_count** | **number** | Number of direction sheets (panels) mounted on the signpost. Whole number. May be null if not yet counted. | [optional] [default to undefined]
**locality** | **string** | Named locality or area where the totem is installed. May be null. | [optional] [default to undefined]
**displayed_icon** | **Array&lt;string&gt;** | List of transit mode icons displayed on the totem face (e.g. \&quot;metro\&quot;, \&quot;vlak\&quot;, \&quot;S\&quot;, \&quot;P+R\&quot;). May be null. | [optional] [default to undefined]
**line** | **Array&lt;string&gt;** | Metro or rail lines associated with this totem (e.g. \&quot;A\&quot;, \&quot;B\&quot;, \&quot;C\&quot;, \&quot;D\&quot;, \&quot;vlak\&quot;). May be null. | [optional] [default to undefined]
**site_survey** | **string** | State of the site survey (místní šetření) for this totem (e.g. \&quot;Realizováno\&quot;, \&quot;K realizaci\&quot;, \&quot;Prověřit - THMP\&quot;, \&quot;Nelze osadit\&quot;). May be null. | [optional] [default to undefined]
**installation_height** | **string** | Height at which the totem is or will be installed. Stored as a string to accommodate unit suffixes. May be null. | [optional] [default to undefined]
**street_light_replacement** | **string** | Record or date of street light replacement associated with this totem installation. May be null. | [optional] [default to undefined]
**tv_number** | **string** | Technical verification (TV) number assigned to this totem. May be null. | [optional] [default to undefined]
**building_permit** | **boolean** | Indicates whether a building permit has been obtained for this totem installation. May be null if status is unknown. | [optional] [default to undefined]
**building_permit_state** | [**BuildingPermitStateEnum**](BuildingPermitStateEnum.md) | Current state of the building permit process. May be null. | [optional] [default to undefined]
**location_note** | **string** | Free-text note describing the precise physical placement of the totem at its site. May be null. | [optional] [default to undefined]
**site_survey_report** | **string** | Reference or summary of the formal site survey report. May be null if no report exists. | [optional] [default to undefined]
**order_state** | [**OrderStateEnum**](OrderStateEnum.md) | Current state of the procurement order for this totem. May be null. | [optional] [default to undefined]
**order_number** | **string** | Procurement order number associated with this totem. May be null if no order has been raised. | [optional] [default to undefined]
**site_survey_date** | **string** | Date on which the site survey was conducted. Stored as a plain string. May be null if no survey has been performed. | [optional] [default to undefined]
**order_planned_deadline** | **string** | Planned deadline date for completion of the procurement order. ISO 8601 date. May be null. | [optional] [default to undefined]
**order_registry_publication** | **boolean** | Indicates whether the procurement order has been published in the public contracts registry. May be null. | [optional] [default to undefined]
**invoice_paid** | **boolean** | Indicates whether the invoice for this totem has been paid. May be null if payment status is unknown. | [optional] [default to undefined]
**exit_number** | **string** | Exit identifier (e.g. metro station exit letter or number) nearest to this totem\&#39;s installation point. May be null. | [optional] [default to undefined]
**dpp_priority** | **number** | Prague Public Transit (DPP) internal priority rank for this totem. Lower values indicate higher priority. May be null. | [optional] [default to undefined]

## Example

```typescript
import { GetFyprElementDetail200Response } from 'golemio-public-transport-api';

const instance: GetFyprElementDetail200Response = {
    id,
    source_created_at,
    source_updated_at,
    source_published_at,
    document_id,
    uid,
    kind,
    name,
    state,
    owner,
    manager,
    city_district,
    lat,
    lon,
    map_link,
    planned_year_of_realization,
    note,
    handover,
    handover_date,
    stop_name,
    stop_direction,
    platform_code,
    stop_type,
    thmp_stop_id,
    shelter_type,
    shelter_id,
    qr_code,
    supplier,
    comments,
    asw_node_id,
    asw_stop_id,
    location_description,
    street_name,
    ropid_element_id,
    price_without_vat,
    serial_number,
    thmp_element_number,
    cleaning_frequency,
    land_parcel_number,
    land_owner,
    workday_boarding_count,
    lines,
    location_verification_on_street_light,
    street_light_number,
    surface_type,
    connection_state,
    connection_type,
    connection_mode,
    priority,
    investor_action,
    design_request,
    design_state,
    design_order_number,
    design_registry_publication,
    design_invoice_paid,
    production_order_number,
    production_state,
    production_registry_publication,
    production_invoice_paid,
    realization_request,
    realization_state,
    realization_order_number,
    realization_registry_publication,
    realization_invoice_paid,
    name_for_visually_impaired,
    voice_day,
    voice_night,
    templates,
    presets,
    data_source,
    imsi,
    connection_point,
    connection_point_number,
    foundation_type,
    warranty_end,
    initial_revision,
    next_revision,
    electronics_service,
    electronics_service_end,
    asset_registered,
    asset_number,
    insurance,
    handed_over_to_ozp,
    dpp_documentation_request,
    dpp_documentation_handover_date,
    design_deadline,
    production_deadline,
    ropid_documentation_submitted,
    ropid_documentation_handover_date,
    dpp_documentation_submitted,
    realization_deadline,
    device_id,
    power_consumption_watt,
    electricity_supply_contract,
    electricity_consumption_price,
    construction_type,
    panel_size,
    design_price_without_vat,
    production_price_without_vat,
    realization_price_without_vat,
    producer,
    producer_contact_person,
    panel_technology,
    panel_model,
    owner_contact,
    connectivity_internet,
    phone_number,
    jis_graphic,
    supported_functions,
    routes,
    insurance_state,
    sheet_count,
    locality,
    displayed_icon,
    line,
    site_survey,
    installation_height,
    street_light_replacement,
    tv_number,
    building_permit,
    building_permit_state,
    location_note,
    site_survey_report,
    order_state,
    order_number,
    site_survey_date,
    order_planned_deadline,
    order_registry_publication,
    invoice_paid,
    exit_number,
    dpp_priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
