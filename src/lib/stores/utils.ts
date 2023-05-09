import { writable } from 'svelte/store';
import Service from '../services';

const service = new Service();
const utils = writable(service);
export default utils;
