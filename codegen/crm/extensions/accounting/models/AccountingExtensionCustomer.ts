/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot's Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Address } from '../models/Address';

/**
* Representation of a customer in the external accounting system.
*/
export class AccountingExtensionCustomer {
    /**
    * The customer's email address
    */
    'emailAddress'?: string;
    /**
    * The customer's full name
    */
    'name': string;
    /**
    * The ID of the customer in the external accounting system.
    */
    'id': string;
    'billingAddress'?: Address;
    /**
    * The ISO 4217 currency code that represents the currency the customer should be billed in.
    */
    'currencyCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountingExtensionCustomer.attributeTypeMap;
    }

    public constructor() {
    }
}

