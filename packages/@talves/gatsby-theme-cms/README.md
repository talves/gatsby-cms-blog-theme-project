## @talves/gatsby-theme-cms

The blog theme with cms built in.

- Built in data configuration
- Built in Previews for the cms that can be overwritten

**_Warning_**: Don't use this theme with other themes in your site. Better to fork this open source theme and compose data and styling from within this theme.

My strategy going forward will work as so:
1. Have one and only one theme for your site (this theme should not be alongside another theme). There should be no reason to have 2 themes on a gatsby site unless you know they compose together.

When you want them to be together, hoist them to their own theme and use that theme as the only theme on the site. Hence, only one theme per site. We can't/shouldn't expect a theme with style, data, component layouts to just work out of the box together with another theme.
