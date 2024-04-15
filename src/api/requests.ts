import { api } from '.';
import { handleApiRequest } from './helpers';

export const getPost = (postId: number) => {
  return handleApiRequest(() => api.get(`/posts/${postId}`)); // id це частина шляху а не параметр
};

// export const getPostsByUserId = (userId: number) => {
//   return handleApiRequest(() => api.get(`/posts?userId=${userId}`)); // id це параметр
// };

export const getPostsByUserId = (userId: number) => {
  return handleApiRequest(() =>
    api.get(`/posts`, {
      params: {
        userId,
      },
    }),
  );
};
