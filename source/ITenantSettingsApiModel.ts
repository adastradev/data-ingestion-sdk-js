export interface ITenantSettingsApiModel {
    dataIngestionBucketPath: string;
    tenantDataIngestionQueueUrl: string;
    tenantName?: string;
    tenantID?: string;
}
