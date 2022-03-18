class Lnode {
    content: any;
    pointer: Lnode | null;
    constructor(content:any) {
        this.content = content;
        this.pointer = null;
    }
}
class Llist {
    head: Lnode | null;
    tail: Lnode | null;
    constructor(){
        this.head = null;
        this.tail = null;
    }


    
    addNode(content:any,node:Lnode | null = null){
        node ??= new Lnode(content);
        if(this.head === null || this.tail === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.pointer = node;
            this.tail = node;
        }
    }
}
function findIntersection(x:Llist, y:Llist){
    let intersectionPoint:any = null;
    let currentNodex:Lnode | null = x.head;
    let currentNodey:Lnode | null = y.head;
    while(currentNodex !== null && currentNodey !== null){
        if(currentNodex === currentNodey){
            intersectionPoint = currentNodex;
            break;
        }
        currentNodex = currentNodex.pointer;
        currentNodey = currentNodey.pointer;
    }
    return intersectionPoint;
}
    
const intersectNode = new Lnode(5)   
const firstList: Llist = new Llist();
firstList.addNode(66);
firstList.addNode(88);
firstList.addNode(0,intersectNode)
firstList.addNode(22);
firstList.addNode(8);
firstList.addNode("hello");
const secondList: Llist = new Llist();
secondList.addNode("typescript");
secondList.addNode(22);
secondList.addNode(0,intersectNode);
secondList.addNode(101);
secondList.addNode("javascript");
secondList.addNode(2);


console.log(findIntersection(firstList,secondList)?.content);
