
export default class Template{
    private static Templates : {[key:string]: Document} = {};
    private static Parser = new DOMParser();

	// js trick to make this run a little faster
    static Clone<T = HTMLElement>(html : string){
        if (!this.Templates.hasOwnProperty(html)){
            let node = this.Parser.parseFromString(html,"text/html");
            this.Templates[html] = node;
        }
        let node = this.Templates[html].body.firstElementChild.cloneNode(true) as T;
        return node;
    }
}