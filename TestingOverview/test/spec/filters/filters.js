'use strict';

describe('Filter', function () {

    // load the controller's module
    beforeEach(module('TestingOverviewApp'));

    describe('reverse', function() {
	it('should reverse a string', inject(function (reverseFilter) {
	    expect(reverseFilter('ABCD')).toEqual('DCBA');
	    expect(reverseFilter('EFGH')).toEqual('HGFE');
	}));
    });
});
