export interface IGetSchedulesApiResponse {
  schedules: [{
    name: string;
    scheduleExpression: string;
  }];
}
