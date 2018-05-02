import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ColorContrastComponent } from './components/color-contrast/color-contrast.component';
import { AltTextComponent } from './components/alt-text/alt-text.component';
import { FormLabelsComponent } from './components/form-labels/form-labels.component';
import { FocusComponent } from './components/focus/focus.component';
import { HtmlHeaderTagsComponent } from './components/html-header-tags/html-header-tags.component';
import { LinksAndButtonsComponent } from './components/links-and-buttons/links-and-buttons.component';
import { AmbiguousLinksComponent } from './components/ambiguous-links/ambiguous-links.component';
import { LanguageAttributeComponent } from './components/language-attribute/language-attribute/language-attribute.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { ToolsComponent } from './components/tools/tools.component';
import { TablesComponent } from './components/tables/tables.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'color_contrast', component: ColorContrastComponent },
  { path: 'alt_text', component: AltTextComponent },
  { path: 'form_labels', component: FormLabelsComponent },
  { path: 'focus', component: FocusComponent },
  { path: 'html_header_tags', component: HtmlHeaderTagsComponent },
  { path: 'links_and_buttons', component: LinksAndButtonsComponent },
  { path: 'ambiguous_links', component: AmbiguousLinksComponent},
  { path: 'language_attribute', component: LanguageAttributeComponent},
  { path: 'navigation', component: NavigationComponent},
  { path: 'animations', component: AnimationsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tools', component: ToolsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
