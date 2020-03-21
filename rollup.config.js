import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [
  // module-friendly ESM build
  {
    input: 'src/index.js',
    output: {
      file: './build/bundle.js',
      format: 'esm',
    },
    // NOTE: The plugins order is important
    plugins: [
      resolve(), // so Rollup can find `ms`
      babel({ exclude: 'node_modules/**' }), // so Rollup transpiles using Babel
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },
];
