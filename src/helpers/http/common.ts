// /admin/dashboard-stats

import { apiClient } from './index';

export const dashboardStats = () => {
  return apiClient.get('/api/user').then((res) => res.data);
};
