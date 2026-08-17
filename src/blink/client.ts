import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'fixnow-marketplac-app-h32616t3',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_Gw-O652DoHkacQLySPIGrmqcOZbdXJ6z',
  authRequired: false,
  auth: { mode: 'managed' },
})
