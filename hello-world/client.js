;(() => {
  'use strict'

  const electron = require('electron')
  const currentWindow = electron.remote.getCurrentWindow()

  console.log('test')
  const $ = (el) => document.querySelector(el)
  const on = (el, method, callback) => {
    el.addEventListener(method, callback, false)
  }

  console.log('dom ready!')
  const $minimize = $('[data-js="minimize"]')
  const $maximize = $('[data-js="maximize"]')
  const $close = $('[data-js="close"]')
  const $prev = $('[data-js="prev"]')
  const $next = $('[data-js="next"]')

  $maximize.shouldMaximize = true

  on($minimize, 'click', () => currentWindow.minimize())

  on($maximize, 'click', () => {
    console.log('Should maximize?', $maximize.shouldMaximize)
    if($maximize.shouldMaximize) {
      $maximize.shouldMaximize = false
      return currentWindow.maximize()
    }
    $maximize.shouldMaximize = true
    currentWindow.restore()
  })

  on($close, 'click', () => {
    console.log('click')
    currentWindow.close()
  })

  on($next, 'click', () => {
    console.log('next')
    window.history.forward()
  })

  on($prev, 'click', () => {
    console.log('prev')
    window.history.back()
  })
})()
