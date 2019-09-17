/// <reference path="_references.js" />

QUnit.module('Calculator Test Suite', {
    beforeEach: calculatorNamespace.initialize
});

QUnit.test("Button Click Test", function (assert) {
    var buttonQuantity = 10;
    for (var i = 0; i < buttonQuantity; i++) {
        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        assert.equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        assert.equal($('#txtInput').val().length, expectedLength, 'Expected string length: ' + expectedLength + ' Actual value: ' + $('#txtInput').val().length);
    }
});

QUnit.test("Add Test", function (assert) {
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    assert.equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    assert.equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

QUnit.test("Subtract Test", function (assert) {
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnMinus').triggerHandler('click');
    var expected = '10';
    assert.equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    assert.equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

QUnit.test("Clear Entry Test", function (assert) {
    $('#txtInput').val('10');
    $('#btnClearEntry').triggerHandler('click');
    var expected = '0';
    assert.equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

QUnit.test("Clear Test", function (assert) {
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnClear').triggerHandler('click');
    var expected = '0';
    assert.equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    assert.equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

QUnit.test("Initialize Test", function (assert) {
    var expected = '0';
    assert.equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
    assert.equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});