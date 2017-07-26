// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.default
// Description:Default width/height when attributes are missing
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Default width/height when attributes are missing");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

_assertSame(offscreenCanvas.width, 100, "offscreenCanvas.width", "100");
_assertSame(offscreenCanvas.height, 50, "offscreenCanvas.height", "50");

t.done();

});
done();
