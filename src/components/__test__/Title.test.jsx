import { render } from '@testing-library/react';

import Title from '../Title';

describe('Title', () => {
  it('Should render Pokemon App', () => {
    const { getByText, getByAltText } = render(<Title title="Pokemon App" />);
    expect(getByText('Pokemon App')).toBeVisible();
    expect(getByAltText('pokemon')).toBeVisible();
  });

  it('Should render title Search Pokemon', () => {
    const { getByText, getByAltText } = render(
      <Title title="Search Pokemon" />,
    );
    expect(getByText('Search Pokemon')).toBeVisible();
    expect(getByAltText('pokemon')).toBeVisible();
  });

  it('Should render title Search Pokemon', () => {
    const { getByAltText } = render(<Title  />);
    expect(getByAltText('pokemon')).toBeVisible();
  });
});
