import { strings } from '@angular-devkit/core';
import {
  Rule,
  Tree,
  applyTemplates,
  SchematicContext,
  apply,
  url,
  move,
  chain,
  mergeWith,
} from '@angular-devkit/schematics';

/**
 * A schematic that generates a new component.
 * 
 * This rule applies templates from the `./files` directory, processes them with the provided options
 * and string utilities (like dasherize), and moves them to the specified or default target path.
 * 
 * @param _options The schematic options, including the name of the component and an optional path.
 * @returns A Rule that merges the generated files into the Tree.
 */

export function component(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    const targetPath = _options.path || 'src/app/';
    const sourceTemplate = apply(url('./files'), [
      applyTemplates({
        ..._options,
        ...strings,
      }),
      move(`${targetPath}/${strings.dasherize(_options.name)}`),
    ]);
    return chain([mergeWith(sourceTemplate)]);
  };
}


