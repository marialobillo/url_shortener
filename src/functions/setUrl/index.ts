import { FormatJSONResponse } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  try {

  } catch (error) {
    console.log('error', error)
    return FormatJSONResponse({
      statusCode: 502,
      data: {
        message: error.message,
      },
    })
  }
}