import { ISnapshotReceivedEventModel } from './ISnapshotReceivedEventModel';

export class SnapshotReceivedEventModel implements ISnapshotReceivedEventModel {
    constructor(public tenant_id: string, public integrationType: string, public snapshotBucketPath: string) {
    }
}
