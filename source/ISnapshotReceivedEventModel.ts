export interface ISnapshotReceivedEventModel {
    tenant_id: string;
    tenantName?: string;
    integrationType: string;
    snapshotBucketPath: string;
    completionTimeDescription: string;
}
