import * as React from 'react';
import * as Enzyme from 'enzyme';
import Hello from './Hello';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(
      Enzyme.shallow(<Hello name="bob" enthusiasmLevel={1} />).contains(
        <div className="greeting">Hello bob!</div>
      )
    ).toBe(true);
  });
});
