const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log', () => {
    const y = sinon.spy(console);
    const x = sinon.stub(Utils, 'calculateNumber');

    x.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(x.calledWith('SUM', 100, 20)).to.be.true;
    expect(x.callCount).to.be.equal(1);
    expect(y.log.calledWith('The total is: 10')).to.be.true;
    expect(y.log.callCount).to.be.equal(1);
    x.restore();
    y.log.restore();
  });
});