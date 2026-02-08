import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function toolsSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}


/**
 * "style": {
            "type": "string",
            "description": "The style format to use for the component.",
            "default": "scss",
            "enum": [
                "css",
                "scss",
                "sass",
                "less"
            ]
        },  
        "skipTests": {
            "type": "boolean",
            "description": "Skip creating a test file for the component.",
            "default": false
        }
 */