"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = component;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
/**
 * Component Schematic
 * @param _options
 *
 * apply
 * @returns
 */
function component(_options) {
    return (_tree, _context) => {
        const targetPath = _options.path || 'src/app/';
        const sourceTemplate = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, _options), core_1.strings)),
            (0, schematics_1.move)(`${targetPath}/${core_1.strings.dasherize(_options.name)}`),
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.mergeWith)(sourceTemplate)]);
    };
}
//# sourceMappingURL=index.js.map