import React      from 'react';
import { render } from 'react-dom';
import Router     from 'ampersand-router';

import Layout    from './layout';
import HomePage  from './pages/home';
import ReposPage from './pages/repos';

export default Router.extend({
  renderPage (page, opts = {wrapInLayout: true}) {
    opts.wrapInLayout
      ? render(<Layout>{page}</Layout>,
               document.body)
      : render(page,
               document.body);
  },

  routes: {
    ''     : 'home',
    'repos': 'repos'
  },

  home () {
    this.renderPage(<HomePage />,
                    {wrapInLayout: false}
    );
  },

  repos () {
    this.renderPage(<ReposPage />);
  }
});
