import { Compiler } from 'webpack';
import { exec } from 'child_process';

interface WebpackShellPluginOptions {
  onBuildStart: string[];
  onBuildEnd: string[];
}

class WebpackShellPlugin {
  options: WebpackShellPluginOptions;

  constructor(options: Partial<WebpackShellPluginOptions> = {}) {
    const defaultOptions: WebpackShellPluginOptions = {
      onBuildStart: [],
      onBuildEnd: []
    };

    this.options = { ...defaultOptions, ...options };
  }

  apply(compiler: Compiler) {
    const options = this.options;

    compiler.hooks.compilation.tap('WebpackShellPlugin', compilation => {
      if (options.onBuildStart.length > 0) {
        console.log('Executing pre-build scripts');
        options.onBuildStart.forEach(script => exec(script, puts));
      }
    });

    compiler.hooks.emit.tapAsync('WebpackShellPlugin', (compilation, callback) => {
      if (options.onBuildEnd.length > 0) {
        console.log('Executing post-build scripts');
        options.onBuildEnd.forEach(script => exec(script, puts));
      }
      callback();
    });
  }
}

function puts(error: Error | null, stdout: string, stderr: string) {
  console.log(stdout);
}

export default WebpackShellPlugin;