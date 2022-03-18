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
    addNode(content:any){
        let node:Lnode = new Lnode(content);
        let pointedNode: Lnode | null = null;
        if(this.head === null){
            this.head = node;
            this.tail = node;
            node.pointer = null;
        }else{
            pointedNode = this.head;
            while(node.pointer != null){
                node = node.pointer;
            }
            node.pointer = node;
        }
    }
}
function findIntersection(x:Llist, y:Llist){
    let xNode:Lnode | null = x.head;
    let yNode:Lnode | null = y.head;
    let intersectionPoint: string = "";
    while(xNode != null && yNode != null){
        if(xNode.content === yNode.content){
            intersectionPoint = xNode.content.toString();
            break;
        }
        xNode = xNode.pointer;
        yNode = yNode.pointer;
    }
    if (intersectionPoint !== ""){
        console.log("The lists intersect at " + intersectionPoint);
    }else{
        console.log("did not intersect");
    }}
const firstList: Llist = new Llist();
firstList.addNode(66);
firstList.addNode(88);
firstList.addNode(22);
firstList.addNode(8);
firstList.addNode("hello");
const secondList: Llist = new Llist();
secondList.addNode("typescript");
secondList.addNode(22);
secondList.addNode(101);
secondList.addNode("javascript");
secondList.addNode(2);
console.log(firstList);
console.log(secondList)

findIntersection(firstList,secondList);
