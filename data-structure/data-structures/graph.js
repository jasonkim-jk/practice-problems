class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    // add a key to the adjacencyList with the name of the vertax
    // set its value to be an empty array
    this.adjacencyList[name] = [];

    // return the adjacencyList
    return this.adjacencyList;
  }
}

const graph = new Graph();
console.log(graph.addVertex("Los Angeles"));
console.log(graph.addVertex("Las Vegas"));
