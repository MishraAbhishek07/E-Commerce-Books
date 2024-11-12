import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const futureConfig = JSON.parse(process.env.VITE_REACT_ROUTER_FUTURE || '{"v7_startTransition": false}');

export default futureConfig;
