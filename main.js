'use strict';

const url = require('url');
const opener = require('opener');
const ncp = require('copy-paste');

const now = new Date();
const year = String(now.getFullYear());
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const date = ('0' + now.getDate()).slice(-2);

const requestUrl = url.format({
  protocol: 'http',
  hostname: 'traininfo.jreast.co.jp',
  pathname: 'delay_certificate/pop.aspx',
  query: {
    D: year + month + date,
    R: '07'
  }
});

opener(requestUrl);
ncp.copy(requestUrl, function () {
  console.log(requestUrl);
});
