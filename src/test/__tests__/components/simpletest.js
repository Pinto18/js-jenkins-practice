import React from 'react';
import renderer from 'react-test-renderer';

test('simple test', () =>
  {
    var num =1
    num=num+1
    expect(num).toEqual(2)
  }
)
