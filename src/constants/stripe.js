const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_hFxb51OAT7gTOYLzGQM8sQnH'
  : 'pk_test_kcKvmtiS67sMSvqjLntxUW6m';

export default STRIPE_PUBLISHABLE;