import { css } from '@emotion/core'
import Theme from '../Theme/Theme'

export const EntryMeta = css`
  float: none;
  display: block;
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: none;
  width: 100%;
  font-size: ${Theme.fonts.sizes.xs};
  color: ${Theme.colors.grays.textDark};
  font-weight: 400;
  line-height: ${Theme.fonts.sizes.lineHeights.lg};
  text-align: center;

  > span {
    display: block;
    margin: 0 auto 14px auto;
    max-width: 55px;
    min-height: 20px;
    text-align: center;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 12px;
    display: inline-block;
    max-width: none;
  }

  a,
  .entry-date {
    padding: 4px 10px;
    margin: 0 2px;
    border: 1px solid ${Theme.colors.grays.borderMedium};
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .03em;
    font-weight: 800;
    color: #6A7686;
    -webkit-transition: color 0.1s, background-color .2s, border-color .2s; transition: color 0.1s, background-color .2s, border-color .2s;
  }

  a:hover {
    color: #345;
    border-color: #345;
  }

  h3 {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .15em;
    color: #DDE4E6;
  }
  .posted-in {
    margin-right: 3px;
  }

  .posted-on time {
    margin-left: 5px;
    border: 0;
  }
  .border-accent-purple {
    border: 2px solid ${Theme.colors.accents.purple};
  }
  .border-accent-red {
    border: 2px solid ${Theme.colors.accents.red};
  }
  .border-accent-yellow {
    border: 2px solid ${Theme.colors.accents.yellow};
  }
  .border-accent-blue {
    border: 2px solid ${Theme.colors.accents.blue};
  }
  .border-accent-green {
    border: 2px solid ${Theme.colors.accents.green};
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }

  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

`

