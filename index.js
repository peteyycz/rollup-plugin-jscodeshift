const jscodeshift = require('jscodeshift');

const { parse, print, types } = require('recast');

const j = ({ transform, pattern }) => ({
  name: 'jscodeshift',
  transform: (source, id) => {
    if (!pattern || id.match(pattern)) {
      const root = transform({ path: id, source }, {
        jscodeshift,
        j: jscodeshift,
      });

      const [ast] = root.getAST();

      const result = print(ast, {
        sourceMapName: "map.json"
      });

      return {
        map: result.map,
        code: result.code,
      }
    }

    return {
      map: null,
      code: source,
    }
  }
});

module.exports = j;
