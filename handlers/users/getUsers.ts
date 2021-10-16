import { Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';
import * as Responses from '/opt/shared/commonResponses';
import User from '/opt/shared/users';

export default async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  const users: any[] = await User.scan().exec();

  return Responses.ok200({ users });
}
