import { sample } from 'lodash';
import config from './config';

// Array of available nodes to connect to
export const nodes = [];

const getNodeUrl = () => sample(config.rpcUrls);

export default getNodeUrl;
