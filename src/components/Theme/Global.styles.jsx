import { css } from '@emotion/core'
import Theme from './Theme'

export default {styles: css`
  html {
    font-size: 10px !important;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fonts.body.family};
    height: 100%;
  }

  main {
    height: 100%;
    display: block;
  }

  .entry-content {
    blockquote {
      position: relative;
      display: table;
      margin: 0 0 0 -1.5rem;
      padding: 2rem 5rem;

    &:before {
      display: none;
    }

    i {
      position: absolute;
      display: table-cell;
    }

    p {
      display: table-cell;
      font-style: italic;
      font-family: ${Theme.fonts.headingsAlt.family};
      line-height: 1.5em;
      padding-left: 3rem;
      font-size: 2.25rem;
    }

    cite {
      display: block;
      font-size: 14px;
      letter-spacing: .04em;
      text-align: right;
      padding-right: 1em;
      margin-top: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${Theme.colors.grays.text};

      &:before {
        content: "–";
        font-family: ${Theme.fonts.headingsAlt.family};
      }
    }
  }

  h2 {
    font-family: ${Theme.fonts.body.family};
    font-weight: 800;

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 39px;
      text-align: center;
      color: ${Theme.colors.grays.text} !important;
      background-color: #fff;
      border-radius: 50%;
      border: 4px solid ${Theme.colors.grays.border};
      display: inline-block;
      width: 47px;

      &:before {
        display: inline;
        margin-left: 0;
        margin-right: 0;
      }
    }
	}

  img {
    border: 1px solid transparent;
    border-radius: 6px;
  }

  p {
    margin: 1.2em 0;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  a {
    color: ${Theme.colors.blue.darker};
    text-decoration: none;
    border-bottom: 1px solid ${Theme.colors.blue.darker};
    transition: color .3s;

    &:hover,
    &:focus,
    &:active {
      color: ${Theme.colors.blue.base};
      border-bottom-color: ${Theme.colors.blue.lighter};
      text-decoration: none;
      outline: 0;
    }
  }

  .sources {
    p {
      font-size: 14px;
      margin: 0 0 1rem;
      line-height: 2rem;
    }
  }


  ${'' /* Doxy Skin for prettyprint */}
  a,code.prettyprint a,pre.prettyprint a{text-decoration:none}
  code .str,
  pre .str{color:#fec243}
  code .kwd,pre .kwd{color:#8470FF}
  code .com,pre .com{color:#32cd32;font-style:italic}
  code .typ,pre .typ{color:#6ecbcc}
  code .lit,pre .lit{color:#d06}
  code .pun,pre .pun{color:#8B8970}
  code .pln,pre .pln{color:#f0f0f0}
  code .tag,pre .tag{color:#9c9cff}
  code .htm,pre .htm{color:plum}
  code .xsl,pre .xsl{color:#d0a0d0}
  code .atn,pre .atn{color:#46eeee;font-weight:400}
  code .atv,pre .atv{color:#EEB4B4}
  code .dec,pre .dec{color:#3387CC}
  code.prettyprint,pre.prettyprint{font-family:'Droid Sans Mono','CPMono_v07 Bold','Droid Sans';font-weight:700;font-size:9pt;background-color:#0f0f0f;-moz-border-radius:8px;-webkit-border-radius:8px;-o-border-radius:8px;-ms-border-radius:8px;-khtml-border-radius:8px;border-radius:8px}
  pre.prettyprint{width:95%;margin:1em auto;padding:1em;white-space:pre-wrap}
  ol.linenums{margin-top:0;margin-bottom:0;color:#8B8970}
  li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}
  @media print{code.prettyprint,pre.prettyprint{background-color:#fff}
  code .str,pre .str{color:#088}
  code .kwd,pre .kwd{color:#006;font-weight:700}
  code .com,pre .com{color:#oc3;font-style:italic}
  code .typ,pre .typ{color:#404;font-weight:700}
  code .lit,pre .lit{color:#044}
  code .pun,pre .pun{color:#440}
  code .pln,pre .pln{color:#000}
  code .tag,pre .tag{color:#b66ff7;font-weight:700}
  code .htm,code .xsl,pre .htm,pre .xsl{color:#606;font-weight:700}
  code .atn,pre .atn{color:#c71585;font-weight:400}
  code .atv,pre .atv{color:#088;font-weight:400}
  }

`}
