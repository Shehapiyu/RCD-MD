(function(_0x1257b6,_0x5e0331){function _0x554e75(_0x3e134f,_0x589792){return _0x34c3(_0x589792- -0x1bd,_0x3e134f);}const _0x269cf=_0x1257b6();while(!![]){try{const _0x1b1d2d=parseInt(_0x554e75(-0x3d,-0x3f))/0x1*(parseInt(_0x554e75(-0x2b,-0x2c))/0x2)+parseInt(_0x554e75(-0x34,-0x31))/0x3+parseInt(_0x554e75(-0x39,-0x39))/0x4+parseInt(_0x554e75(-0x32,-0x29))/0x5+-parseInt(_0x554e75(-0x1d,-0x27))/0x6*(parseInt(_0x554e75(-0x48,-0x37))/0x7)+-parseInt(_0x554e75(-0x2b,-0x36))/0x8+-parseInt(_0x554e75(-0x37,-0x41))/0x9*(-parseInt(_0x554e75(-0x45,-0x3d))/0xa);if(_0x1b1d2d===_0x5e0331)break;else _0x269cf['push'](_0x269cf['shift']());}catch(_0x32c698){_0x269cf['push'](_0x269cf['shift']());}}}(_0x4ed0,0xea4de));function _0x37a82e(_0x577e87,_0x445277){return _0x34c3(_0x445277-0x32c,_0x577e87);}const _0xf702ef=(function(){let _0x4ccc59=!![];return function(_0x12357a,_0x473441){const _0x60263b=_0x4ccc59?function(){function _0x339fc5(_0x358e79,_0x44d01b){return _0x34c3(_0x44d01b-0x23,_0x358e79);}if(_0x473441){const _0x3f6e70=_0x473441[_0x339fc5(0x1b6,0x1b8)](_0x12357a,arguments);return _0x473441=null,_0x3f6e70;}}:function(){};return _0x4ccc59=![],_0x60263b;};}()),_0x58d2f2=_0xf702ef(this,function(){function _0x2d2ced(_0x227d57,_0x240f9f){return _0x34c3(_0x227d57-0x2f0,_0x240f9f);}const _0x2845ea=function(){function _0x13647f(_0x25059a,_0x482c51){return _0x34c3(_0x25059a-0x1d8,_0x482c51);}let _0x106cd9;try{_0x106cd9=Function(_0x13647f(0x361,0x354)+_0x13647f(0x363,0x35e)+');')();}catch(_0x2b1c1b){_0x106cd9=window;}return _0x106cd9;},_0x18d8ab=_0x2845ea(),_0x7a22c9=_0x18d8ab[_0x2d2ced(0x464,0x470)]=_0x18d8ab[_0x2d2ced(0x464,0x453)]||{},_0x24f55d=[_0x2d2ced(0x46f,0x477),_0x2d2ced(0x471,0x460),'info','error',_0x2d2ced(0x466,0x45e),_0x2d2ced(0x46a,0x473),_0x2d2ced(0x46d,0x470)];for(let _0x8e7779=0x0;_0x8e7779<_0x24f55d[_0x2d2ced(0x472,0x47c)];_0x8e7779++){const _0x1b3a1f=_0xf702ef[_0x2d2ced(0x47d,0x46b)][_0x2d2ced(0x46b,0x462)][_0x2d2ced(0x480,0x481)](_0xf702ef),_0x249fc0=_0x24f55d[_0x8e7779],_0x465a41=_0x7a22c9[_0x249fc0]||_0x1b3a1f;_0x1b3a1f[_0x2d2ced(0x483,0x484)]=_0xf702ef['bind'](_0xf702ef),_0x1b3a1f[_0x2d2ced(0x467,0x462)]=_0x465a41[_0x2d2ced(0x467,0x468)][_0x2d2ced(0x480,0x470)](_0x465a41),_0x7a22c9[_0x249fc0]=_0x1b3a1f;}});_0x58d2f2();import _0x4a9764 from'node-fetch';import _0x236814 from'dotenv';_0x236814[_0x37a82e(0x493,0x4a5)]();const GITHUB_RAW_URL=_0x37a82e(0x499,0x4a4),fetchResponses=async()=>{function _0x499cbe(_0x4c7e7a,_0x3c0a15){return _0x37a82e(_0x4c7e7a,_0x3c0a15- -0x67);}try{const _0x3e4d28=await _0x4a9764(GITHUB_RAW_URL);if(!_0x3e4d28['ok'])throw new Error(_0x499cbe(0x44a,0x448)+_0x3e4d28[_0x499cbe(0x444,0x44f)]);const _0x109d02=await _0x3e4d28['json']();return _0x109d02;}catch(_0x2b371a){return console[_0x499cbe(0x452,0x453)]('Error\x20fetching\x20responses:',_0x2b371a),{};}},handleGreeting=async(_0xe58288,_0x448816)=>{function _0x5a8e42(_0x4f4291,_0x50bde8){return _0x37a82e(_0x4f4291,_0x50bde8- -0x24d);}try{const _0x171adf=_0xe58288[_0x5a8e42(0x25f,0x26e)]['toLowerCase'](),_0x51a1be=await fetchResponses();if(_0x51a1be[_0x171adf]){const _0x25221c=_0x51a1be[_0x171adf];await _0x448816[_0x5a8e42(0x279,0x271)](_0xe58288[_0x5a8e42(0x258,0x264)],{'sticker':{'url':_0x25221c},'contextInfo':{'mentionedJid':[_0xe58288[_0x5a8e42(0x254,0x254)]],'stanzaId':_0xe58288['key']['id'],'participant':_0xe58288[_0x5a8e42(0x254,0x254)],'quotedMessage':_0xe58288['message']}});}}catch(_0x312b95){console[_0x5a8e42(0x272,0x26d)](_0x5a8e42(0x264,0x267),_0x312b95);}};function _0x34c3(_0x259af3,_0x300fe7){const _0x22148b=_0x4ed0();return _0x34c3=function(_0x58d2f2,_0xf702ef){_0x58d2f2=_0x58d2f2-0x174;let _0x5490b1=_0x22148b[_0x58d2f2];return _0x5490b1;},_0x34c3(_0x259af3,_0x300fe7);}function _0x4ed0(){const _0x4fe98f=['return\x20(function()\x20','statusText','{}.constructor(\x22return\x20this\x22)(\x20)','2459232jWgwXx','constructor','error','body','bind','618KLUJbu','sendMessage','__proto__','2483610FFjNSX','apply','30RBaSVH','console','sender','exception','toString','https://raw.githubusercontent.com/raviya321/RCD-MD-CLOUD-/refs/heads/main/auto-sticker.json','config','table','prototype','147654wXEaLE','trace','457vpAJwU','log','170bbqFiB','warn','length','Failed\x20to\x20fetch\x20responses:\x20','5818804FwbPhZ','from','1161965feOQLv','11212776ZkFduh','Error:'];_0x4ed0=function(){return _0x4fe98f;};return _0x4ed0();}export default handleGreeting;