class Graph {
  constructor() {
    this.adjacentList = {};
    this.numberOfNodes = 0;
  }

  addVertex(node) {
    if (node === null || node === undefined) return null;

    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }

    return this.adjacentList;
  }

  addEdge(node1, node2) {
    if (node1 === null || node1 === undefined || node2 === null || node2 === undefined || node1 === node2) return null;

    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const vertexs = Object.keys(this.adjacentList);

    for (let vertex in this.adjacentList) {
      let str = `${vertex} --> `;

      for (let edge of this.adjacentList[vertex]) {
        str += ` ${edge}`;
      }
      console.log(str);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex(null);
myGraph.addVertex(undefined);
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
myGraph.showConnections();
