#!/usr/bin/env node

const core = require('@jeneric/core');
const cmsConfig = require('@jeneric/cms/app/config');
const appConfig = require('./app/config');

core.init(cmsConfig, appConfig);