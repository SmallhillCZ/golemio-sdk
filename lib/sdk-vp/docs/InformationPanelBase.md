# InformationPanelBase

Writable fields for an information panel element. Extends ElementBase via allOf with 75 type-specific properties. Compose with ElementReadOnly to obtain the full InformationPanel read schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **string** | Unique document identifier sourced from the upstream CMS (Strapi). Used as the stable external reference for deduplication. | [default to undefined]
**uid** | **string** | Optional external UUID assigned to the physical element by the field operations team. May be null for elements not yet assigned. | [optional] [default to undefined]
**kind** | **string** | Discriminator field identifying the element type. Determines which typed schema applies (Totem, InformationPanel, DisplayCase, Obelisk, Signpost). | [default to undefined]
**name** | **string** | Human-readable name of the element. May be null. | [optional] [default to undefined]
**state** | **string** | Lifecycle state of the element (e.g. PLANNED, IN_PROGRESS, REALIZED). Sourced from CMS. May be null. | [optional] [default to undefined]
**owner** | **string** | Organization or entity that owns the element. May be null. | [optional] [default to undefined]
**manager** | **string** | Organization or entity that manages the element. May be null. | [optional] [default to undefined]
**city_district** | **string** | Prague city district where the element is physically located. May be null. | [optional] [default to undefined]
**lat** | **number** | WGS-84 latitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**lon** | **number** | WGS-84 longitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**map_link** | **string** | URL to an external map view showing the element location. May be null. | [optional] [default to undefined]
**planned_year_of_realization** | **string** | Year in which the element is planned to be realized or installed. Stored as string to accommodate partial or estimated values. May be null. | [optional] [default to undefined]
**note** | **string** | Free-text operational note attached to the element by field staff. May be null. | [optional] [default to undefined]
**handover** | **boolean** | Indicates whether the element has been handed over to the maintenance team. May be null if handover status is unknown. | [optional] [default to undefined]
**handover_date** | **string** | Date on which the element was formally handed over to the maintenance team. ISO 8601 date. May be null. | [optional] [default to undefined]
**stop_name** | **string** | Human-readable name of the stop where the panel is installed. May be null. | [optional] [default to undefined]
**stop_direction** | **string** | Direction label shown on the panel for the associated stop. May be null. | [optional] [default to undefined]
**platform_code** | **string** | Platform or stand identifier within the stop. May be null. | [optional] [default to undefined]
**stop_type** | **Array&lt;string&gt;** | List of transport mode types served at the stop (e.g. bus, tram, metro). May be null. | [optional] [default to undefined]
**thmp_stop_id** | **string** | Stop identifier in the THMP (Technicka hromadna mestska preprava) registry. May be null. | [optional] [default to undefined]
**land_parcel_number** | **string** | Cadastral parcel number of the land where the panel is installed. May be null. | [optional] [default to undefined]
**land_owner** | **string** | Owner of the land parcel. May be null. | [optional] [default to undefined]
**workday_boarding_count** | **number** | Average number of passengers boarding at this stop on a workday. Integer count. May be null. | [optional] [default to undefined]
**lines** | **string** | Comma-separated list of line numbers served at the stop. May be null. | [optional] [default to undefined]
**location_description** | **string** | Free-text description of the panel\&#39;s physical location. May be null. | [optional] [default to undefined]
**location_verification_on_street_light** | **string** | Reference to the street light pole used to verify installation position. May be null. | [optional] [default to undefined]
**shelter_type** | **string** | Type or model of the shelter associated with this panel. May be null. | [optional] [default to undefined]
**shelter_id** | **string** | Identifier of the shelter associated with this panel. May be null. | [optional] [default to undefined]
**street_light_number** | **string** | Reference number of the street light pole carrying this panel. May be null. | [optional] [default to undefined]
**surface_type** | **string** | Type of ground surface at the installation site. May be null. | [optional] [default to undefined]
**connection_state** | **string** | Current connectivity state of the panel (e.g. connected, disconnected, pending). May be null. | [optional] [default to undefined]
**connection_type** | **string** | Technology used for the panel\&#39;s data connection (e.g. ethernet, GSM, LTE). May be null. | [optional] [default to undefined]
**connection_mode** | **string** | Network addressing mode used for the panel connection. May be null. | [optional] [default to undefined]
**priority** | **string** | Installation or maintenance priority assigned to this panel. May be null. | [optional] [default to undefined]
**investor_action** | **string** | Investor action or project reference linked to this panel. May be null. | [optional] [default to undefined]
**design_request** | **string** | Reference identifier for the design (projekce) request. May be null. | [optional] [default to undefined]
**design_state** | **string** | Current state of the design phase. May be null. | [optional] [default to undefined]
**design_order_number** | **string** | Order number issued for the design phase. May be null. | [optional] [default to undefined]
**design_registry_publication** | **string** | Publication reference in the public procurement registry for the design order. May be null. | [optional] [default to undefined]
**design_invoice_paid** | **string** | Indicates whether the design phase invoice has been paid. May be null. | [optional] [default to undefined]
**production_order_number** | **string** | Order number issued for the production (vyroba) phase. May be null. | [optional] [default to undefined]
**production_state** | **string** | Current state of the production phase. May be null. | [optional] [default to undefined]
**production_registry_publication** | **string** | Publication reference in the public procurement registry for the production order. May be null. | [optional] [default to undefined]
**production_invoice_paid** | **string** | Indicates whether the production phase invoice has been paid. May be null. | [optional] [default to undefined]
**realization_request** | **boolean** | Whether a realization (realizace) request has been raised for this panel. May be null. | [optional] [default to undefined]
**realization_state** | **string** | Current state of the realization phase. May be null. | [optional] [default to undefined]
**realization_order_number** | **string** | Order number issued for the realization phase. May be null. | [optional] [default to undefined]
**realization_registry_publication** | **string** | Publication reference in the public procurement registry for the realization order. May be null. | [optional] [default to undefined]
**realization_invoice_paid** | **string** | Indicates whether the realization phase invoice has been paid. May be null. | [optional] [default to undefined]
**name_for_visually_impaired** | **string** | Accessible name of the stop used in audio announcements for visually impaired passengers. May be null. | [optional] [default to undefined]
**voice_day** | **string** | Voice announcement schedule for daytime operation. May be null. | [optional] [default to undefined]
**voice_night** | **string** | Voice announcement schedule for night-time operation. May be null. | [optional] [default to undefined]
**templates** | **string** | Display template identifier or name used to render content on this panel. May be null. | [optional] [default to undefined]
**presets** | **Array&lt;string&gt;** | Presets assigned to this panel. | [optional] [default to undefined]
**data_source** | **string** | Identifier of the data source feeding real-time information to this panel. May be null. | [optional] [default to undefined]
**imsi** | **string** | IMSI (International Mobile Subscriber Identity) of the SIM card installed in this panel. May be null. | [optional] [default to undefined]
**connection_point** | **string** | Identifier of the electrical or network connection point used by this panel. May be null. | [optional] [default to undefined]
**connection_point_number** | **string** | Sequential number of the connection point within its cabinet or junction. May be null. | [optional] [default to undefined]
**foundation_type** | **string** | Type of physical foundation used to mount the panel. May be null. | [optional] [default to undefined]
**warranty_end** | **string** | Date on which the manufacturer\&#39;s warranty for this panel expires. ISO 8601 date. May be null. | [optional] [default to undefined]
**initial_revision** | **string** | Date of the first technical revision carried out on this panel. ISO 8601 date. May be null. | [optional] [default to undefined]
**next_revision** | **string** | Date of the next scheduled technical revision. ISO 8601 date. May be null. | [optional] [default to undefined]
**electronics_service** | **boolean** | Whether the panel is covered by an electronics service contract. May be null. | [optional] [default to undefined]
**electronics_service_end** | **string** | Date on which the electronics service contract expires. ISO 8601 date. May be null. | [optional] [default to undefined]
**asset_registered** | **boolean** | Whether this panel has been registered in the asset management system. May be null. | [optional] [default to undefined]
**asset_number** | **string** | Asset management system identifier for this panel. May be null. | [optional] [default to undefined]
**insurance** | **boolean** | Whether this panel is covered by an insurance policy. May be null. | [optional] [default to undefined]
**handed_over_to_ozp** | **boolean** | Whether this panel has been formally handed over to OZP (Odbor zelene a pro verejny prostor) for management. May be null. | [optional] [default to undefined]
**dpp_documentation_request** | **boolean** | Whether documentation for DPP (Dopravni podnik Praha) has been requested. May be null. | [optional] [default to undefined]
**dpp_documentation_handover_date** | **string** | Date on which documentation was handed over to DPP. ISO 8601 date. May be null. | [optional] [default to undefined]
**design_deadline** | **string** | Contractual deadline for completing the design phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**production_deadline** | **string** | Contractual deadline for completing the production phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**ropid_documentation_submitted** | **Array&lt;string&gt;** | List of document types submitted to ROPID as part of the documentation package. May be null. | [optional] [default to undefined]
**ropid_documentation_handover_date** | **string** | Date on which documentation was handed over to ROPID. ISO 8601 date. May be null. | [optional] [default to undefined]
**dpp_documentation_submitted** | **Array&lt;string&gt;** | List of document types submitted to DPP as part of the documentation package. May be null. | [optional] [default to undefined]
**realization_deadline** | **string** | Contractual deadline for completing the realization phase. ISO 8601 date. May be null. | [optional] [default to undefined]
**device_id** | **string** | Unique device identifier assigned to the panel\&#39;s embedded hardware unit. May be null. | [optional] [default to undefined]
**asw_node_id** | **string** | Node identifier in the ASW (Automatizovany system rizeni) network registry. May be null. | [optional] [default to undefined]
**asw_stop_id** | **string** | Stop identifier in the ASW network registry. May be null. | [optional] [default to undefined]
**power_consumption_watt** | **number** | Rated power consumption of the panel in watts. Decimal values are permitted. May be null. | [optional] [default to undefined]
**thmp_element_number** | **string** | Element number assigned in the THMP registry. May be null. | [optional] [default to undefined]
**electricity_supply_contract** | **string** | Reference number of the electricity supply contract for this panel. May be null. | [optional] [default to undefined]
**cleaning_frequency** | **string** | Scheduled cleaning frequency for this panel. May be null. | [optional] [default to undefined]
**electricity_consumption_price** | **number** | Unit price per kWh charged under the electricity supply contract. Decimal values are permitted. May be null. | [optional] [default to undefined]
**construction_type** | **string** | Type of physical construction used for this panel (e.g. pole_mounted, wall_mounted, freestanding). May be null. | [optional] [default to undefined]
**panel_size** | **number** | Count of rows for text or data on the panel. The source system stores this with a \&quot;v\&quot; prefix which is stripped on output. May be null. | [optional] [default to undefined]
**design_price_without_vat** | **number** | Contracted price for the design phase excluding VAT, in CZK. May be null. | [optional] [default to undefined]
**production_price_without_vat** | **number** | Contracted price for the production phase excluding VAT, in CZK. May be null. | [optional] [default to undefined]
**realization_price_without_vat** | **number** | Contracted price for the realization phase excluding VAT, in CZK. May be null. | [optional] [default to undefined]
**serial_number** | **string** | Manufacturer\&#39;s serial number of the panel unit. May be null. | [optional] [default to undefined]
**producer** | **string** | Name of the panel manufacturer. May be null. | [optional] [default to undefined]
**producer_contact_person** | **string** | Contact person at the panel manufacturer. May be null. | [optional] [default to undefined]
**panel_technology** | **string** | Display technology of the panel (e.g. LCD, e-paper). May be null. | [optional] [default to undefined]
**panel_model** | **string** | Model designation of the panel unit. May be null. | [optional] [default to undefined]
**owner_contact** | **string** | Contact information for the element owner. May be null. | [optional] [default to undefined]
**connectivity_internet** | **string** | Internet connectivity type or provider for the panel. May be null. | [optional] [default to undefined]
**phone_number** | **string** | Phone number associated with the panel\&#39;s SIM or connectivity. May be null. | [optional] [default to undefined]
**jis_graphic** | **boolean** | Whether this panel uses JIS (Jednotný Informační Systém) graphics. Sourced from the Strapi boolean field grafika_jis. May be null if not yet set in the source system. | [optional] [default to undefined]
**supported_functions** | **Array&lt;string&gt;** | List of functions supported by this panel, derived from a multiselect field in Strapi (podporovane_funkce). May be null. | [optional] [default to undefined]

## Example

```typescript
import { InformationPanelBase } from 'golemio-public-transport-api';

const instance: InformationPanelBase = {
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
    land_parcel_number,
    land_owner,
    workday_boarding_count,
    lines,
    location_description,
    location_verification_on_street_light,
    shelter_type,
    shelter_id,
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
    asw_node_id,
    asw_stop_id,
    power_consumption_watt,
    thmp_element_number,
    electricity_supply_contract,
    cleaning_frequency,
    electricity_consumption_price,
    construction_type,
    panel_size,
    design_price_without_vat,
    production_price_without_vat,
    realization_price_without_vat,
    serial_number,
    producer,
    producer_contact_person,
    panel_technology,
    panel_model,
    owner_contact,
    connectivity_internet,
    phone_number,
    jis_graphic,
    supported_functions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
