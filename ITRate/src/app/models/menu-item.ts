export class MenuItem {
    link: string;
    title: string;
    activeClass: string;
    exact: boolean;
    constructor(link: string, title: string, activeClass: string, exact: boolean) {
      this.link = link;
      this.title = title;
      this.activeClass = activeClass;
      this.exact = exact;
    }
  }
  