import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}

const sortWorkspaceProjects = () =>
  updateJsonInTree('workspace.json', (json) => ({
    ...json,
    projects: sortObjectKeys(json.projects),
  }));

const sortNxProjects = () =>
  updateJsonInTree('nx.json', (json) => ({
    ...json,
    projects: sortObjectKeys(json.projects),
  }));

const sortTsConfigProjects = () =>
  updateJsonInTree('tsconfig.base.json', (json) => ({
    ...json,
    compilerOptions: {
      ...json.compilerOptions,
      paths: sortObjectKeys(json.compilerOptions.paths),
    },
  }));

export default function (schema: any): Rule {
  return chain([
    sortWorkspaceProjects(),
    sortNxProjects(),
    sortTsConfigProjects(),
  ]);
}
