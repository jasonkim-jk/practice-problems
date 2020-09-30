class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add a key to the adjacencyList with the name of the vertax
    // set its value to be an empty array
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  print() {
    // return the adjacencyList
    return this.adjacencyList;
  }
}

const graph = new Graph();
graph.addVertex("Los Angeles");
graph.addVertex("Las Vegas");
console.log(graph.print());
