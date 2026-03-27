/* global Services, Zotero */
"use strict";

var ZoteroRSVP;

function startup({ id, version, rootURI }) {
  Services.scriptloader.loadSubScript(rootURI + "content/rsvp.js");
  ZoteroRSVP.init({ id, version, rootURI });
  ZoteroRSVP.addToAllWindows();
}

function onMainWindowLoad({ window }) {
  ZoteroRSVP?.addToWindow(window);
}

function onMainWindowUnload({ window }) {
  ZoteroRSVP?.removeFromWindow(window);
}

function shutdown() {
  ZoteroRSVP?.shutdown();
  ZoteroRSVP = undefined;
}

function install() {}
function uninstall() {}
