import Template from "./util/template";
import "./page.scss";


// i was going to add multiple pages (single-page but still, y'know, different pages inside that)- but ultimately didn't feel the need to, but I did write this little boilerplate just in case.
export default class Page{
	Element : HTMLElement;
	constructor(html : string){
		this.Element = Template.Clone(html);
		document.body.append(this.Element);
	}
}