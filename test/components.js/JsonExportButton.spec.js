var Vue = require('vue')

import JsonExportButton from '@/components/JsonExportButton.vue'

describe('JsonExportButton.vue', function () {

  it('directive 체크', function () {
    expect(JsonExportButton).not.toBe(null);
  })

  it('makeList2Obj', function () {
    var testList;
    var resultObj;
    testList = [];
    resultObj = {};
    expect(JsonExportButton.makeList2Obj(testList)).toBe(resultObj);
  })

  it('makeJsonData', function () {
    var testList;
    var resultStr;
    testList = [];
    resultStr = {};
    expect(JsonExportButton.makeJsonData(testList)).toBe(resultStr);
  })
})