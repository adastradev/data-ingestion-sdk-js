export interface IGetSchedulesApiResponse {
  schedules: [{
    name: string;
    ScheduleExpression: string;
  }];
}
