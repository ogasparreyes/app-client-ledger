import { Component, signal } from '@angular/core';
import { MenuSection, MENU_SECTIONS, isMenuGroup, MenuGroup } from '../../../interfaces/menu-sections.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  protected readonly sections = MENU_SECTIONS;
  protected readonly isMenuGroup = isMenuGroup;

  // Guarda el label de los grupos abiertos. Arranca con los que tienen expanded: true
  private readonly openGroups = signal<Set<string>>(
    new Set(
      MENU_SECTIONS.flatMap((section) => section.items)
        .filter(isMenuGroup)
        .filter((group) => group.expanded)
        .map((group) => group.label),
    ),
  );

  protected isOpen(group: MenuGroup): boolean {
    return this.openGroups().has(group.label);
  }

    protected toggle(group: MenuGroup): void {
    this.openGroups.update((current) => {
      const next = new Set(current);
      if (next.has(group.label)) {
        next.delete(group.label);
      } else {
        next.add(group.label);
      }
      return next;
    });
  }



}
