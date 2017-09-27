"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class BeaconsHttpClientV1 extends pip_services_net_node_1.CommandableHttpClient {
    constructor(config) {
        super("beacons");
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getBeacons(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'beacons.get_beacons');
        this.callCommand('get_beacons', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getBeaconById(correlationId, id, callback) {
        this.callCommand('get_beacon_by_id', correlationId, {
            beacon_id: id
        }, callback);
    }
    calculatePosition(correlationId, siteId, udis, callback) {
        this.callCommand('calculate_position', correlationId, {
            site_id: siteId,
            udis: udis
        }, callback);
    }
    createBeacon(correlationId, item, callback) {
        this.callCommand('create_beacon', correlationId, {
            beacon: item
        }, callback);
    }
    updateBeacon(correlationId, item, callback) {
        this.callCommand('update_beacon', correlationId, {
            beacon: item
        }, callback);
    }
    deleteBeaconById(correlationId, id, callback) {
        this.callCommand('delete_beacon_by_id', correlationId, {
            beacon_id: id
        }, callback);
    }
}
exports.BeaconsHttpClientV1 = BeaconsHttpClientV1;
//# sourceMappingURL=BeaconsHttpClientV1.js.map