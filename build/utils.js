"use strict";

/**
 * Created by benpurslow on 29/06/2017.
 */

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}