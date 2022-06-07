/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IFrameActionBody } from './IFrameActionBody';
import { IntegratorObjectResultActionsInner } from './IntegratorObjectResultActionsInner';
import { HttpFile } from '../http/http';

export class TopLevelActions {
    'settings'?: IFrameActionBody;
    'primary'?: IntegratorObjectResultActionsInner;
    'secondary': Array<IntegratorObjectResultActionsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "settings",
            "baseName": "settings",
            "type": "IFrameActionBody",
            "format": ""
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "IntegratorObjectResultActionsInner",
            "format": ""
        },
        {
            "name": "secondary",
            "baseName": "secondary",
            "type": "Array<IntegratorObjectResultActionsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TopLevelActions.attributeTypeMap;
    }

    public constructor() {
    }
}

