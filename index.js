#!/usr/bin/env node

const core = require('@jeneric/core');
const cmsConfig = require('@jeneric/cms/src/config');
const appConfig = require('./src/config');

core.init(cmsConfig, appConfig);

if (core.config) {
    console.log(core.config.module.server.config.routes);
}
