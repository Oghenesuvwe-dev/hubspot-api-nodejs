/**
 * Transactional Email
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The ID of a send event.
*/
export class EventIdView {
    /**
    * Time of event creation.
    */
    'created': Date;
    /**
    * Identifier of event.
    */
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return EventIdView.attributeTypeMap;
    }

    public constructor() {
    }
}

