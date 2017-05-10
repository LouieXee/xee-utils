import utils from './utils';
import Base from './Base';
import Events from './Events';

utils.version = typeof VERSION != 'undefined' ? VERSION : null;

utils.Base = Base;
utils.Events = Events;

export default utils;
