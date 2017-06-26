import {version} from '../package.json';

import utils from './utils';
import support from './support';
import browser from './browser';

import Base from './Base';
import Events from './Events';

utils.version = version;

utils.Base = Base;
utils.Events = Events;
utils.support = support;
utils.browser = browser;

export default utils;
