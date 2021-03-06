// Copyright (C) 2016-2017 MISTEMS Ltd.

const { app } = require('electron')
const { wom } = require('maxwhere')
const path = require('path')
const scenePath = path.join(__dirname, 'static', 'scene')

wom.setAppConfig({
  width: 1280,
  height: 720,
  title: 'MaxWhere - Boilerplate App',
  'display-mode': 'maximized',
  navigation: 'coginav-lite',
  show: false
})
wom.installComponent(require('./components/ball_maze'), 'maze')
wom.load(path.join(scenePath, 'where.json')).once('ready', () => {
  wom.showWindow()
})
wom.on('quit', app.quit)
