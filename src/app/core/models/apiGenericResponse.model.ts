export interface ApiGenericResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}
