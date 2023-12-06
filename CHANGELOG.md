## [04-12-2023]

### Fixed

- [PI-22](https://pianotheus.atlassian.net/browse/PI-22)
  When the URL changes, react-router renders a new component instead of hard refreshing the page. As a side effect, it remembers the current scroll position and doesn’t automatically scroll back to the top of the page when the page changes.
