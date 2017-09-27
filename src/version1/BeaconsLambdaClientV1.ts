import { FilterParams } from "pip-services-commons-node";
import { ConfigParams } from "pip-services-commons-node";
import { PagingParams } from "pip-services-commons-node";
import { Descriptor } from "pip-services-commons-node";
import { DataPage } from "pip-services-commons-node";
import { CommandableLambdaClient } from "pip-services-aws-node";

import { BeaconV1 } from "./BeaconV1";
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsLambdaClientV1 extends CommandableLambdaClient implements IBeaconsClientV1 {
    public constructor(config?: any) {
        super("beacons");
        
        if( config != null) 
            this.configure(ConfigParams.fromValue(config));
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void {
        let timing = this.instrument(correlationId, 'beacons.get_beacons');
        this.callCommand(
            'get_beacons',
            correlationId,
            {
                filter: filter,
                paging: paging
            },
            callback
        )
    }

    public getBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand(
            'get_beacon_by_id',
            correlationId,
            {
                beacon_id: id
            },
            callback
        )
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[], callback: (err: any, position: any) => void): void {
        this.callCommand(
            'calculate_position',
            correlationId,
            {
                site_id: siteId,
                udis: udis
            },
            callback
        )
    }

    public createBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand(
            'create_beacon',
            correlationId,
            {
                beacon: item
            },
            callback
        )
    }

    public updateBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand(
            'update_beacon',
            correlationId,
            {
                beacon: item
            },
            callback
        )
    }

    public deleteBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand(
            'delete_beacon_by_id',
            correlationId,
            {
                beacon_id: id
            },
            callback
        )
    }
}