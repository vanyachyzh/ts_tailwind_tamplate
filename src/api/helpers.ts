import { ApiResponse } from './types.ts';

import { AxiosResponse } from 'axios';

export const handleApiRequest = async <T>(
  apiCall: () => Promise<AxiosResponse<T>>,
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiCall();
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
