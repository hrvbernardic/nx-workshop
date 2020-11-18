import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export interface UtilLibSchema {
  name: string;
  directory: 'store' | 'api' | 'shared';
}

export default function (schema: UtilLibSchema): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `util-${schema.name}`,
      directory: schema.directory,
      linter: 'tslint',
      tags: `scope:${schema.directory}, type:util`,
    }),
  ]);
}
