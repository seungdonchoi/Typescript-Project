/// <reference path="prjModel/drag-drop.ts" />
/// <reference path="prjModel/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="utility/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/base-components.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

  new ProjectInput();
  new ProjectList('active')
  new ProjectList('finished')
}
