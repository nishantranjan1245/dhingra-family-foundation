import { createClient } from '@dhingra/sdk';
// import { getAccessToken } from '@dhingra/sdk/utils/auth-utils';

// Create a client with authentication required
export const dhingra = createClient({
  appId: "69281c7ee84ff85cce223db5", 
  requiresAuth: true // Ensure authentication is required for all operations
});
