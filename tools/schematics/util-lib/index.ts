import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `util-${schema.name}`,
      directory: schema.directory,
      linter: 'tslint',
      tags: `type:util, scope:${schema.directory}`,
    }),
  ]);
}
