/*
 * ATOMS
 * Smallest pieces of UI such as
 * Text | Image | Button | Input
 * */
export { default as Input } from "./atoms/Input/Input.component";

/*
 * MOLECULES
 * More complex Atoms
 * SimpleCard | ListItem | Searchbar
 * */
export { default as Loader } from "./molecules/Loader/Loader.component";

/*
 * ORGANISMS
 * Larger single pieces of UI such as menus and lists
 * List | Form | Header | Sidebar
 * */
export { default as List } from "./organisms/List/List.component";

/*
 * TEMAPLTES
 * Components responcible for Macro page layouts
 * MainPage | AuthPage
 * */
export { default as Page } from "./templates/Page/Page.component";
